import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/common/Content'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  date,
  title,
  // image,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="bg-white p-10">
      <div className="">
        <p className="text-sm">
          <span className="text-lg">{date}</span>
        </p>
        <h1 className="text-3xl font-black mb-1 mt-0">{title}</h1>
        <p className="class">
          <Link to="/">
            <span className="text-lg mb-1 bg-gray-300 underline hover:bg-gray-200">
              #JavaScript
            </span>
          </Link>
          <Link to="/">
            <span className="text-lg mb-1 ml-5 bg-gray-300 underline hover:bg-gray-200">
              #React.js
            </span>
          </Link>
        </p>
      </div>
      {/* <div className="mt-10">
        <img src={image.url} alt="カバー画像" className="w-768" />
      </div> */}
      <div className="mt-10">
        <div className="text-left leading-loose">
          {/* <PostContent content={content} /> */}
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </section>
  )
}

const BlogPost = ({ data }) => {
  const { contentfulPost } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={contentfulPost.content.childMarkdownRemark.html}
        contentComponent={HTMLContent}
        date={contentfulPost.date}
        title={contentfulPost.title}
        // image={contentfulPost.coverImage}
      />
    </Layout>
  )
}
export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    contentfulPost(id: { eq: $id }) {
      content {
        childMarkdownRemark {
          html
        }
      }
      date
      slug
      title
      tags {
        title
        slug
      }
    }
  }
`
