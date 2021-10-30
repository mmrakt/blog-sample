import React from 'react'
import DOMPurify from 'dompurify'
import marked from 'marked'

type IContent = {
  content: string
}

const Content: React.VFC<IContent> = ({ content }) => (
  <div
    className="post-content"
    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(marked(content)) }}
  />
)

export default Content
