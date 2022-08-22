import { graphql, PageProps } from 'gatsby'
import React from 'react'

import Head from '../components/Head'
import Pagination from '../components/Pagination'
import PostList from '../components/PostList'
import PostListLayout from '../components/PostListLayout'

type IProps = {
  allContentfulPost: GatsbyTypes.ContentfulPostConnection
}
const PostsTemplate = ({ data, pageContext, location }: PageProps<IProps>) => {
  const { nodes: posts } = data.allContentfulPost

  return (
    <PostListLayout>
      <Head pageUrl={location.pathname} />
      <PostList nodes={posts} />
      <Pagination pageContext={pageContext} />
    </PostListLayout>
  )
}

export const BlogIndexPageQuery = graphql`
  query Posts($skip: Int, $limit: Int) {
    allContentfulPost(
      sort: { fields: createdAt, order: DESC }
      skip: $skip
      limit: $limit
    ) {
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
