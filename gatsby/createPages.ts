import path from 'path'

const createPaginatedPages = require('gatsby-paginate')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  // NOTE: 各プラットフォームの記事をまとめて件数調整するためにtemplate側ではなくここでfetchする
  return graphql(`
    {
      allContentfulPost(sort: { createdAt: DESC }) {
        edges {
          node {
            date(formatString: "X")
            slug
            title
            id
            createdAt
            tags {
              title
              slug
            }
          }
          next {
            slug
            title
          }
          previous {
            slug
            title
          }
        }
      }
      allFeedQiita(sort: { pubDate: DESC }) {
        edges {
          node {
            date: pubDate(formatString: "X")
            title
            link
          }
        }
      }
      postsByTag: allContentfulPost {
        group(field: { tags: { slug: SELECT } }) {
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

    const contentfulPosts = result.data.allContentfulPost.edges
    const qiitaPosts = result.data.allFeedQiita.edges
    const posts = contentfulPosts.concat(qiitaPosts)
    const postsPerPage = 10
    const postsByTag = result.data.postsByTag.group

    // NOTE: 日付の降順にソート
    posts.sort((a, b) => b.node.date - a.node.date)
    createPaginatedPages({
      edges: posts,
      createPage,
      pageTemplate: path.resolve('./src/templates/posts.tsx'),
      pageLength: postsPerPage,
      pathPrefix: '',
      buildPath: (index: number, pathPrefix: string) =>
        index > 1 ? `${pathPrefix}/page/${index}` : `/${pathPrefix}`,
    })

    postsByTag.forEach((tagPage) =>
      createPaginatedPages({
        edges: tagPage.edges,
        createPage,
        pageTemplate: path.resolve('./src/templates/postsByTag.tsx'),
        pageLength: postsPerPage,
        pathPrefix: 'tag',
        buildPath: (index: number, pathPrefix: string) =>
          index > 1
            ? `${pathPrefix}/${tagPage.fieldValue}/page`
            : `${pathPrefix}/${tagPage.fieldValue}`,
        context: {
          tagSlug: tagPage.fieldValue,
        },
      })
    )

    contentfulPosts.forEach((post) => {
      createPage({
        path: post.node.slug,
        component: path.resolve('./src/templates/post.tsx'),
        context: {
          slug: post.node.slug,
          next: post.next,
          prev: post.previous,
        },
      })
    })
  })
}
