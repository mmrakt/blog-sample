import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Pagination from '../components/Pagination'

export const PostsByTagTemplate = ({ data, pageContext }) => {
  console.log(data)

  return (
    <Layout>
      <p className="text-center">
        <b className="mr-2 text-lg">#{data.tags.edges[0].node.title}</b>
        の記事
      </p>
      {data?.posts.nodes.map((node) => (
        <div key={node.id} className="my-5 p-5  bg-white text-sm">
          <p className="mb-3">{node.date}</p>

          <div className="text-lg font-bold mb-3">
            <Link to={`/${node.slug}`}>
              <span className="hover:text-gray-400">{node.title}</span>
            </Link>
          </div>
          <p className="flex flex-wrap mb-3">
            {node.tags &&
              node.tags.map((tag) => (
                <Link to={`/tag/${tag.slug}`} key={tag.slug}>
                  <span className="mr-5 mb-3 bg-gray-300 underline hover:bg-gray-200">
                    #{tag.title}
                  </span>
                </Link>
              ))}
          </p>
          <div className="mb-3">
            {node.excerpt.excerpt.length > 100
              ? `${node.excerpt.excerpt.substring(0, 100)}...`
              : node.excerpt.excerpt}
          </div>
          <div className="flex">
            <div className="underline ml-auto ">
              <Link to={`/${node.slug}`}>
                <span className="hover:text-gray-400 cursor-pointer">
                  続きを読む
                </span>
              </Link>
            </div>
          </div>
        </div>
      ))}
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
