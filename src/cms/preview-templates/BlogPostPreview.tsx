import React from 'react'
import { BlogPageTemplate } from '../../templates/blog-page'

type IProps = {
  entry: {
    getIn: (...string) => any
  }
  widgetFor: (string) => any
}

const BlogPagePreview = (props: IProps) => {
  const { entry, widgetFor } = props
  const tags = entry.getIn(['data', 'tags'])
  return <BlogPageTemplate />
}

export default BlogPagePreview
