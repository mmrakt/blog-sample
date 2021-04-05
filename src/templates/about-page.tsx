import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import { MarkdownRemark } from '../../types/graphql-types.d'

type ITemplateProps = {
  title: string
  content: string
  contentComponent: (any) => any
}

export const AboutPageTemplate = (props: ITemplateProps) => {
  const {title, content, contentComponent} = props
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

type IProps = {
  post: MarkdownRemark
}

const AboutPage = ({ data }: {data: IProps}) => {
  const { post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post?.frontmatter.title}
        content={post?.html}
      />
    </Layout>
  )
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
