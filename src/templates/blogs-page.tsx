import React from 'react'
import Img from 'gatsby-image'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/Layout'

export const BlogsPageTemplate = () => {
  const data = useStaticQuery(
    graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "YYYY年MM月DD日")
                featuredpost
                image {
                  childImageSharp {
                    fixed(width: 300) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  const { edges: posts } = data.allMarkdownRemark

  return (
    <Layout>
      <div className="mt-5">
        <div className="text-3xl mt-5 text-center">お知らせ一覧</div>
        <div className="w-5/6 mx-auto">
          {posts.map(({ node: post }) => (
            <div key={post.id}>
              <div className="flex mt-5">
                <div className="flex-2">
                  <Link to={post.fields.slug}>
                    <Img fixed={post.frontmatter.image.childImageSharp.fixed} />
                  </Link>
                </div>
                <div className="flex-2">
                  <div className="pt-5 pl-5 text-xl font-bold flex-1">
                    <Link to={post.fields.slug}>
                      <span>{post.frontmatter.title}</span>
                    </Link>
                  </div>
                  <p className="text-right">{post.frontmatter.date}</p>
                  <div className="pt-5 pl-5">{post.excerpt}</div>
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

export default BlogsPageTemplate
