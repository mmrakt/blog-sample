import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
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
      <section className="box-outline pc:p-10 p-5 w-full dark:bg-dark-gray bg-white">
        <p className="text-sm">
          <span className="text-lg">{contentfulPost.date}</span>
        </p>
        <h1 className="mb-2 mt-0 text-3xl font-black">
          {contentfulPost.title}
        </h1>
        <p className="flex flex-wrap">
          {contentfulPost.tags &&
            contentfulPost.tags.map((tag) => (
              <Link to={`/tag/${tag.slug}`} key={tag.slug}>
                <span className="mb-3 mr-5 hover:text-gray-500 underline text-lg">
                  #{tag.title}
                </span>
              </Link>
            ))}
        </p>
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
      <div className="flex items-center mt-10">
        {prev && (
          <div className="w-1/2">
            <Link to={`/${prev.slug}`} className="flex items-center underline">
              <ChevronLeftIcon />
              <span>{prev.title}</span>
            </Link>
          </div>
        )}
        {next && (
          <div className="w-1/2">
            <Link
              to={`/${next.slug}`}
              className="flex items-center float-right underline"
            >
              <span>{next.title}</span>
              <ChevronRightIcon />
            </Link>
          </div>
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
