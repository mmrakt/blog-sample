import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Pagination from '../components/Pagination'
import Profile from '../components/Profile'

export const BlogPageIndex = ({ data, pageContext }) => {
  const { nodes } = data.allGraphCmsPost

  return (
    <Layout>
      <div className="py-5 px-3 mx-auto max-w-xl">
        {nodes.map((node) => (
          <div key={node.id} className="my-3 bg-white">
            <span className="text-xs p-3">{node.date}</span>
            <div className="text-md font-bold p-3">
              <Link to={node.slug}>
                <span>{node.title}</span>
              </Link>
            </div>
            <div className="text-xs p-3">{node.excerpt}</div>
          </div>
        ))}
        <Pagination pageContext={pageContext} />
        <Profile />
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
