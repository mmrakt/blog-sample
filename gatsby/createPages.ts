import path from 'path'
import { paginate } from 'gatsby-awesome-pagination'

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
      postsByTag: allContentfulPost {
        group(field: tags___slug) {
          edges {
            node {
              slug
            }
          }
          fieldValue
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      throw result.errors
    }

    const posts = result.data.allContentfulPost.edges
    const postsPerPage = 10
    const postsByTag = result.data.postsByTag.group

    paginate({
      createPage,
      items: posts,
      itemsPerPage: postsPerPage,
      pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? '/' : '/page'),
      component: path.resolve('./src/templates/posts.tsx'),
    })

    postsByTag.forEach((tagPage) => {
      paginate({
        createPage,
        items: tagPage.edges,
        itemsPerPage: postsPerPage,
        pathPrefix: ({ pageNumber }) =>
          pageNumber === 0
            ? `/tag/${tagPage.fieldValue}`
            : `/tag/${tagPage.fieldValue}/page`,
        component: path.resolve('./src/templates/postsByTag.tsx'),
        context: {
          tagSlug: tagPage.fieldValue,
        },
      })
    })

    posts.forEach(({ node }) => {
      createPage({
        path: node.slug,
        component: path.resolve('./src/templates/post.tsx'),
        context: {
          id: node.id,
        },
      })
    })
  })
}
