import React from 'react'
import { BlogPostTemplate } from '../../templates/blog-post'

type IProps = {
  entry: {
    getIn: (...string) => any
  }
  widgetFor: (string) => any
}

const BlogPostPreview = (props: IProps) => {
  const {entry, widgetFor} = props
  const tags = entry.getIn(['data', 'tags'])
  return (
    <BlogPostTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      tags={tags && tags.toJS()}
      title={entry.getIn(['data', 'title'])}
    />
  )
}

export default BlogPostPreview
