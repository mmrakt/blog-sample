import React from 'react'
import { BlogsPageTemplate } from '../../templates/blogs-page'

type IProps = {
  entry: {
    getIn: (...string) => any
  }
  widgetFor: (string) => any
}

const BlogsPagePreview = (props: IProps) => {
  const { entry, widgetFor } = props

  return <BlogsPageTemplate />
}

export default BlogsPagePreview
