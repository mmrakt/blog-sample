import React from 'react'
import Img from 'gatsby-image'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  date,
  tags,
  title,
  helmet,
  image,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section w-5/6 mx-auto">
      {helmet || ''}
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
          <Img fixed={image.childImageSharp.fixed} />
        </div>
        <div className="text-left">
          <PostContent content={content} />
        </div>
      </div>
    </section>
  )
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        date={post.frontmatter.date}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        image={post.frontmatter.image}
      />
    </Layout>
  )
}
export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "YYYY年MM月DD日")
        title
        description
        tags
        image {
          childImageSharp {
            fixed(width: 1000) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
