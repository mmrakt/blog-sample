import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const CoursePageTemplate = ({
  content,
  contentComponent,
  date,
  title,
  image,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="p-10">
      <div className="mt-5">
        <p className="text-3xl">{title}</p>
        <p className="text-right text-xl">{date}</p>
      </div>
      <div className="mt-10">
        <img src={image.url} alt="カバー画像" className="w-768 object-cover" />
      </div>
      <div className="mt-10">
        <div className="text-left leading-loose">
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
      <CoursePageTemplate
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
  query CoursePageByID($id: ID!) {
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
