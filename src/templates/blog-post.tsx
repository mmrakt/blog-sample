import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  date,
  title,
  image,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section w-5/6 mx-auto">
      <div className="text-3xl mt-5">{title}</div>
      <p className="text-right">{date}</p>
      <div className="mt-5">
        <div className="">
          <img src={image.url} alt="カバー画像" className="w-96 mx-auto" />
        </div>
        <div className="text-left">
          <PostContent content={content} />
        </div>
      </div>
    </section>
  )
}

const BlogPost = ({ data }) => {
  const { graphCmsPost } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={graphCmsPost.content.html}
        contentComponent={HTMLContent}
        date={graphCmsPost.date}
        title={graphCmsPost.title}
        image={graphCmsPost.coverImage}
      />
    </Layout>
  )
}
export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: ID!) {
    graphCmsPost(remoteId: { eq: $id }) {
      content {
        html
      }
      coverImage {
        url
      }
      id
      date
      slug
      title
      tags
    }
  }
`
