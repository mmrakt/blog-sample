import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Pagination from '../components/Pagination'
import Head from '../components/Head'
import PostList from '../components/PostList'

// TODO: typegenで生成した型(GatsbyTypes.PostsQuery)を当てたいがreadonlyの制約エラーになるのを解消する
const PostsTemplate = ({ data, pageContext, location }) => {
  const { nodes } = data.allContentfulPost

  return (
    <Layout>
      <Head pageUrl={location.pathname} />
      <div>
        <PostList posts={nodes} />
        <Pagination pageContext={pageContext} />
      </div>
    </Layout>
  )
}

export const BlogIndexPageQuery = graphql`
  query Posts($skip: Int, $limit: Int) {
    allContentfulPost(sort: { fields: createdAt }, skip: $skip, limit: $limit) {
      nodes {
        date(formatString: "YYYY.MM.DD")
        slug
        title
        content {
          content
        }
        excerpt {
          excerpt
        }
        tags {
          title
          slug
        }
      }
    }
  }
`

export default PostsTemplate
