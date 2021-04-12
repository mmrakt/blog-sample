import React from 'react'
import Img from 'gatsby-image'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../../components/Layout'

export const BlogPageIndex = () => {
  const data = useStaticQuery(
    graphql`
      query BlogRollQuery {
        allGraphCmsPost {
          nodes {
            id
            excerpt
            coverImage {
              url
            }
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
      <div className="mt-5">
        <div className="text-3xl mt-5 text-center">お知らせ一覧</div>
        <div className="w-5/6 mx-auto">
          {nodes.map((node) => (
            <div key={node.id}>
              <div className="flex mt-5">
                <div className="flex-2">
                  <Link to={node.slug}>
                    <img
                      src={node.coverImage.url}
                      alt="カバー画像"
                      className="w-96"
                    />
                  </Link>
                </div>
                <div className="flex-2">
                  <div className="pt-5 pl-5 text-xl font-bold flex-1">
                    <Link to={node.slug}>
                      <span>{node.title}</span>
                    </Link>
                  </div>
                  <p className="text-right">{node.date}</p>
                  <div className="pt-5 pl-5">{node.excerpt}</div>
                </div>
              </div>
              <hr className="my-5" />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default BlogPageIndex
