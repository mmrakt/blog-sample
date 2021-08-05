import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Pagination from '../components/Pagination'

export const BlogPageIndex = ({ data, pageContext }) => {
  const { nodes } = data.allGraphCmsPost

  return (
    <Layout>
      <div className="">
        {nodes.map((node) => (
          <div key={node.id} className="my-5 p-3  bg-white">
            <span className="text-sm p-3">
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
            </span>
            <div className="text-lg font-bold p-3">
              <Link to={node.slug}>
                <span className="hover:text-gray-400">{node.title}</span>
              </Link>
            </div>
            <div className="text-sm p-3">
              {node.excerpt.length > 100
                ? `${node.excerpt.substring(0, 100)}...`
                : node.excerpt}
            </div>
            <div className="flex p-3">
              <div className="underline ml-auto text-sm">
                <span className="hover:text-gray-400 cursor-pointer">
                  続きを読む
                </span>
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
    allGraphCmsPost(sort: { fields: createdAt }, skip: $skip, limit: $limit) {
      nodes {
        id
        excerpt
        date
        slug
        title
      }
    }
  }
`

export default BlogPageIndex
