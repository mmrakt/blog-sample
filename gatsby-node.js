const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allGraphCmsPost: allGraphCmsPost {
        nodes {
          id: remoteId
          slug
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      throw result.errors
    }

    const cmsPosts = result.data.allGraphCmsPost.nodes

    cmsPosts.forEach(({ id, slug }) => {
      createPage({
        path: slug,
        component: path.resolve('src/templates/blog-post.tsx'),
        context: { id },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node)

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: 'slug',
      node,
      value,
    })
  }
}
