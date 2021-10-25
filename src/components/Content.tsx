import React from 'react'
import DOMPurify from 'dompurify'

type IContent = {
  content: string
  className?: string
}

export const HTMLContent: React.VFC<IContent> = ({ content, className }) => (
  <div
    className="post-content"
    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
  />
)

const Content: React.VFC<IContent> = ({ content, className }) => (
  <div className={className}>{content}</div>
)

export default Content
