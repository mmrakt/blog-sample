import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Pagination from '../components/Pagination'

export const BlogPageIndex = ({ data, pageContext }) => {
  const { nodes } = data.allContentfulPost

  return (
    <Layout>
      <div className="">
        {nodes.map((node) => (
          <div key={node.id} className="my-5 p-3  bg-white">
            <p className="text-sm p-3">
              <span className="class">{node.date}</span>
              <Link to="/">
                <span className="ml-5 p-1 bg-gray-300 underline hover:bg-gray-200">
                  #JavaScript
                </span>
              </Link>
              <Link to="/">
                <span className="ml-5 p-1 bg-gray-300 underline hover:bg-gray-200">
                  #React.js
                </span>
              </Link>
            </p>
            <div className="text-lg font-bold p-3">
              <Link to={node.slug}>
                <span className="hover:text-gray-400">{node.title}</span>
              </Link>
            </div>
            <div className="text-sm p-3">
              {node.excerpt.excerpt.length > 100
                ? `${node.excerpt.excerpt.substring(0, 100)}...`
                : node.excerpt.excerpt}
            </div>
            <div className="flex p-3">
              <div className="underline ml-auto text-sm">
                <Link to={node.slug}>
                  <span className="hover:text-gray-400 cursor-pointer">
                    続きを読む
                  </span>
                </Link>
              </div>
            </div>
          </div>
        ))}
        <Pagination pageContext={pageContext} />
      </div>
    </Layout>
  )
}

export const BlogIndexPageQuery = graphql`
  query BlogRollQuery($skip: Int, $limit: Int) {
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
      }
    }
  }
`

export default BlogPageIndex
