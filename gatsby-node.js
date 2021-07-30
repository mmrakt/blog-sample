const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allGraphCmsPost: allGraphCmsPost(
        sort: { fields: createdAt, order: DESC }
      ) {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      throw result.errors
    }

    const cmsPosts = result.data.allGraphCmsPost.edges
    const postsPerPage = 3
    const numPages = Math.ceil(cmsPosts.length / postsPerPage)
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? '/' : `/page/${i + 1}`,
        component: path.resolve('./src/pages/index.tsx'),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })

    cmsPosts.forEach(({ node }) => {
      createPage({
        path: node.slug,
        component: path.resolve('./src/templates/blog.tsx'),
        context: {
          id: node.id,
        },
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
