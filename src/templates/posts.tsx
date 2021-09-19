import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Pagination from '../components/Pagination'
import Head from '../components/Head'
import PostList from '../components/PostList'

const PostsTemplate = ({ data, pageContext }) => {
  const { nodes } = data.allContentfulPost

  return (
    <Layout>
      <Head />
      <PostList posts={nodes} />
      <Pagination pageContext={pageContext} />
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
