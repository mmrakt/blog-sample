import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Head from '../components/Head'

const PostTemplate = ({ data, pageContext, location }) => {
  const { contentfulPost } = data
  const image = getImage(contentfulPost.coverImage)
  const PostContent = HTMLContent || Content
  const { prev, next } = pageContext

  return (
    <Layout>
      <Head
        pageTitle={contentfulPost.title}
        pageDescription={contentfulPost.excerpt.excerpt}
        pageUrl={location.pathname}
      />
      <section className="bg-white p-10">
        <div className="">
          <p className="text-sm">
            <span className="text-lg">{contentfulPost.date}</span>
          </p>
          <h1 className="text-3xl font-black mb-2 mt-0">
            {contentfulPost.title}
          </h1>
          <p className="flex flex-wrap">
            {contentfulPost.tags &&
              contentfulPost.tags.map((tag) => (
                <Link to={`/tag/${tag.slug}`} key={tag.slug}>
                  <span className="text-lg mb-3 mr-5 underline hover:text-gray-500">
                    #{tag.title}
                  </span>
                </Link>
              ))}
          </p>
        </div>
        {image && (
          <div className="mt-10">
            <GatsbyImage
              image={image}
              alt={`「${contentfulPost.title}」のカバー画像`}
            />
          </div>
        )}
        <div className="mt-10">
          <div className="text-left leading-loose">
            <PostContent
              content={contentfulPost.content.childMarkdownRemark.html}
            />
          </div>
        </div>
      </section>
      <div className="flex mt-10">
        {prev && (
          <p className="hover:text-gray-500">
            <Link to={`/${prev.slug}`}>
              <div className="flex">
                <span className="">&lt;</span>
                <div className="ml-2">
                  <p className="class">prev</p>
                  <p className="class">{prev.title}</p>
                </div>
              </div>
            </Link>
          </p>
        )}
        {/* <p className="ml-auto">新しい記事&nbsp;&gt;</p> */}
        {next && (
          <p className="ml-auto hover:text-gray-500">
            <Link to={`/${next.slug}`}>
              <div className="flex ml-auto">
                <div className="ml-2">
                  <p className="float-right">next</p>
                  <p className="clear-right">{next.title}</p>
                </div>
                <span className="ml-2">&gt;</span>
              </div>
            </Link>
          </p>
        )}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query Post($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      content {
        childMarkdownRemark {
          html
        }
      }
      date(formatString: "YYYY.MM.DD")
      slug
      title
      tags {
        title
        slug
      }
      coverImage {
        gatsbyImageData
      }
      excerpt {
        excerpt
      }
    }
  }
`

export default PostTemplate
