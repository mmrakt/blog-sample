import React from 'react'
import { kebabCase } from 'lodash'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  date,
  tags,
  title,
  image,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section w-5/6 mx-auto">
      {tags && tags.length ? (
        <div style={{ marginTop: '4rem' }}>
          <ul className="taglist">
            {tags.map((tag) => (
              <li key={`${tag}tag`}>
                <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
              </li>
            ))}
            <p className="text-right">{date}</p>
          </ul>
        </div>
      ) : null}
      <div className="text-3xl mt-5">{title}</div>
      <div className="mt-5">
        <div className="text-center">
          <img src={image.url} alt="カバー画像" className="w-96" />
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
  console.log(graphCmsPost.content.html)

  return (
    <Layout>
      <BlogPostTemplate
        content={graphCmsPost.content.html}
        contentComponent={HTMLContent}
        date={graphCmsPost.date}
        tags={graphCmsPost.tags}
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
