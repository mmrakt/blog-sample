import { graphql, PageProps } from 'gatsby'
import React from 'react'

import Head from '../components/Head'
import Layout from '../components/Layout'
import Pagination from '../components/Pagination'
import PostList from '../components/PostList'

type IProps = {
  allContentfulPost: GatsbyTypes.ContentfulPostConnection
}
const PostsTemplate = ({ data, pageContext, location }: PageProps<IProps>) => {
  const { nodes: posts } = data.allContentfulPost

  return (
    <Layout>
      <Head pageUrl={location.pathname} />
      <div>
        <PostList nodes={posts} />
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
