import { graphql, Link, PageProps } from 'gatsby'
import React from 'react'

import { PageContextProps } from '../../types/gatsby-awesome-pagination'
import Content from '../components/Content'
import Head from '../components/Head'
import PostLayout from '../components/PostLayout'
import ChevronLeft from '../components/common/ChevronLeft'
import ChevronRight from '../components/common/ChevronRight'
import useStringTrim from '../hooks/useStringTrim'

type IProps = {
  data: {
    contentfulPost: GatsbyTypes.PostQuery['contentfulPost']
  }
  pageContext: PageContextProps
  location: PageProps['location']
}

const PostTemplate = ({ data, pageContext, location }: IProps) => {
  const { contentfulPost } = data
  const { prev, next } = pageContext
  const url = location.origin + contentfulPost.slug

  return (
    <PostLayout title={contentfulPost.title} url={url}>
      <Head
        pageTitle={contentfulPost.title}
        pageDescription={contentfulPost.excerpt.excerpt}
        pageUrl={location.pathname}
        pageType="article"
      />
      <section className="box-outline pc:p-10 p-5 w-full dark:bg-dark-gray bg-white animate-slide-in">
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
                <span className="text-link mb-3 mr-5 underline text-lg">
                  #{tag.title}
                </span>
              </Link>
            ))}
        </p>
        <div className="mt-10">
          <div className="text-left leading-loose">
            <Content
              content={contentfulPost.content.childMarkdownRemark.html}
            />
          </div>
        </div>
      </section>
      <div className="flex items-center mt-10">
        <div className="w-1/2">
          {prev && (
            <Link to={`/${prev.slug}`} className="flex items-center">
              <div className="text-link flex items-center underline">
                <ChevronLeft />
                {useStringTrim(prev.title, 50)}
              </div>
            </Link>
          )}
        </div>
        <div className="w-1/2">
          {next && (
            <Link
              to={`/${next.slug}`}
              className="flex items-center float-right"
            >
              <div className="text-link flex items-center underline">
                {useStringTrim(next.title, 50)}
                <ChevronRight />
              </div>
            </Link>
          )}
        </div>
      </div>
    </PostLayout>
  )
}

export const pageQuery = graphql`
  query Post($slug: String) {
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
      excerpt {
        excerpt
      }
    }
  }
`

export default PostTemplate
