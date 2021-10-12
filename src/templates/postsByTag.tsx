import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Pagination from '../components/Pagination'
import PostList from '../components/PostList'
import Head from '../components/Head'

export const PostsByTagTemplate = ({ data, pageContext, location }) => {
  const { nodes } = data.posts

  return (
    <Layout>
      <Head pageUrl={location.pathname} />
      <p className="mb-7 text-center">
        <b className="mr-2 text-lg">#{data.tags.edges[0].node.title}</b>
        の記事
      </p>
      <PostList posts={nodes} />
      <Pagination pageContext={pageContext} />
    </Layout>
  )
}

export const TagPostIndexPageQuery = graphql`
  query PostsByTag($skip: Int, $limit: Int, $tagSlug: String) {
    posts: allContentfulPost(
      sort: { fields: createdAt }
      skip: $skip
      limit: $limit
      filter: { tags: { elemMatch: { slug: { eq: $tagSlug } } } }
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
    tags: allContentfulTag(filter: { slug: { eq: $tagSlug } }) {
      edges {
        node {
          title
        }
      }
    }
  }
`

export default PostsByTagTemplate
