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
      allFeedZenn(sort: { pubDate: DESC }) {
        edges {
          node {
            date: pubDate
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
    let zennPosts = result.data.allFeedZenn.edges
    zennPosts = convertDateStringToUnixTimestamp(zennPosts)
    const allPosts = [...contentfulPosts, ...qiitaPosts, ...zennPosts]
    const postsPerPage = 10
    const postsByTag = result.data.postsByTag.group

    // NOTE: 日付の降順にソート
    allPosts.sort((a, b) => b.node.date - a.node.date)
    createPaginatedPages({
      edges: allPosts,
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

// NOTE: graphql側でunix timestampに変換できない場合の考慮
function convertDateStringToUnixTimestamp(posts) {
  return posts.map((post) => ({
    node: {
      ...post.node,
      date: new Date(post.node.date).getTime() / 1000,
    },
  }))
}
