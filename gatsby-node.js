const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark: allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
      allGraphCmsPost: allGraphCmsPost {
        nodes {
          id: remoteId
          slug
        }
      }
      allGraphCmsPage: allGraphCmsPage {
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

    const posts = result.data.allMarkdownRemark.edges
    const cmsPosts = result.data.allGraphCmsPost.nodes
    const cmsPages = result.data.allGraphCmsPage.nodes

    posts.forEach((edge) => {
      const { id } = edge.node
      if (edge.node.fields) {
        createPage({
          path: edge.node.fields.slug,
          component: path.resolve(
            `src/templates/${String(edge.node.frontmatter.templateKey)}.tsx`
          ),
          // pageQueryのデフォルトの引数はid
          context: {
            id,
          },
        })
      }
    })

    cmsPosts.forEach(({ id, slug }) => {
      createPage({
        path: slug,
        component: path.resolve('src/templates/blog-post.tsx'),
        context: { id },
      })
    })

    cmsPages.forEach(({ id, slug }) => {
      createPage({
        path: slug,
        component: path.resolve('src/templates/course-page.tsx'),
        context: { id },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: 'slug',
      node,
      value,
    })
  }
}
