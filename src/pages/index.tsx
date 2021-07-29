import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/Layout'

export const BlogPageIndex = () => {
  const data = useStaticQuery(
    graphql`
      query BlogRollQuery {
        allGraphCmsPost {
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
  )
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
      </div>
    </Layout>
  )
}

export default BlogPageIndex
