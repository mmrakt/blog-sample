const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')
const { paginate } = require('gatsby-awesome-pagination')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allGraphCmsPost: allGraphCmsPost(
        sort: { fields: createdAt, order: DESC }
      ) {
        edges {
          node {
            remoteId
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

    const blogPosts = result.data.allGraphCmsPost.edges
    const postsPerPage = 3

    paginate({
      createPage,
      items: blogPosts,
      itemsPerPage: postsPerPage,
      pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? '/' : '/page'),
      component: path.resolve('./src/templates/index.tsx'),
    })

    blogPosts.forEach(({ node }) => {
      console.log(node)
      createPage({
        path: node.slug,
        component: path.resolve('./src/templates/blog.tsx'),
        context: {
          remoteId: node.remoteId,
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
