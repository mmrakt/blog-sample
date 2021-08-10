const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { paginate } = require('gatsby-awesome-pagination')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allContentfulPost(sort: { fields: createdAt, order: DESC }) {
        edges {
          node {
            slug
            id
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      throw result.errors
    }

    const blogPosts = result.data.allContentfulPost.edges
    const postsPerPage = 10

    paginate({
      createPage,
      items: blogPosts,
      itemsPerPage: postsPerPage,
      pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? '/' : '/page'),
      component: path.resolve('./src/templates/index.tsx'),
    })

    blogPosts.forEach(({ node }) => {
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

  // console.log(node)
  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: 'slug',
      node,
      value,
    })
  }
}
