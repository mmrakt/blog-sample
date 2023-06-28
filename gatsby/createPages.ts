import path from 'path'

import { MEDIA } from '../src/config'

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

    MEDIA.forEach((media) => {
      let edges = []
      let slug = ''
      if (media === 'mimu-memo') {
        edges = contentfulPosts
        slug = 'mimu-memo'
      } else if (media === 'Qiita') {
        edges = qiitaPosts
        slug = 'qiita'
      } else if (media === 'Zenn') {
        edges = zennPosts
        slug = 'zenn'
      }
      createPaginatedPages({
        edges,
        createPage,
        pageTemplate: path.resolve('./src/templates/postsByMedia.tsx'),
        pageLength: postsPerPage,
        pathPrefix: slug,
        buildPath: (index: number, pathPrefix: string) =>
          index > 1 ? `${pathPrefix}/page/${index}` : `${pathPrefix}`,
        context: {
          media,
        },
      })
    })

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
