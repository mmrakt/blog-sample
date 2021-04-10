import React from 'react'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import { MarkdownRemark } from '../../types/graphql-types.d'

type ITemplateProps = {
  content: string
  contentComponent: (any) => any
  description: string
  tags: any[]
  title: string
  // helmet: any
}

export const BlogPageTemplate = (props: ITemplateProps) => {
  const { content, contentComponent, description, tags, title } = props
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {/* {helmet || ''} */}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {/* {title} */}
            </h1>
            {/* <p>{description}</p> */}
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: '4rem' }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map((tag) => (
                    <li key={`${tag}tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

type IProps = {
  data: {
    post: MarkdownRemark
  }
}

const BlogPage = () => {
  const data = useStaticQuery(
    graphql`
      query BlogPostByID($id: String!) {
        markdownRemark(id: { eq: $id }) {
          id
          html
          frontmatter {
            date(formatString: "YYYY年MM月DD日")
            title
            description
            tags
          }
        }
      }
    `
  )

  const post = data.markdownRemark

  return (
    <Layout>
      <BlogPageTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        // helmet={
        //   <Helmet titleTemplate="%s | Blog">
        //     <title>{`${post.frontmatter.title}`}</title>
        //     <meta
        //       name="description"
        //       content={`${post.frontmatter.description}`}
        //     />
        //   </Helmet>
        // }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

export default BlogPage
