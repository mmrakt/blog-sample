import React from 'react'
import Img from 'gatsby-image'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../../components/Layout'
import PageTitle from '../../components/PageTitle'

export const BlogPageIndex = () => {
  // id = Post:ckncsw4mo2nm40b889j5rbw9l:PUBLISHED
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
        <PageTitle title="お知らせ一覧" />
        <div className="w-5/6 mx-auto mt-10">
          {nodes.map((node) => (
            <div key={node.id}>
              <div className="flex">
                <div className="flex-2 p-5">
                  <Link to={node.slug}>
                    <img
                      src={node.coverImage.url}
                      alt="カバー画像"
                      className="max-w-sm"
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
