import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const CoursePageTemplate = ({
  content,
  contentComponent,
  title,
  image,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="p-10">
      <div className="mt-5">
        <p className="text-3xl">{title}</p>
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

const CoursePage = ({ data }) => {
  const { graphCmsPage } = data

  return (
    <Layout>
      <CoursePageTemplate
        content={graphCmsPage.content.html}
        contentComponent={HTMLContent}
        title={graphCmsPage.title}
        image={graphCmsPage.coverImage}
      />
    </Layout>
  )
}
export default CoursePage

export const pageQuery = graphql`
  query CoursePageByID($id: ID!) {
    graphCmsPage(remoteId: { eq: $id }) {
      content {
        html
      }
      coverImage {
        url
      }
      title
    }
  }
`
