import React from 'react'

type IContent = {
  content: string
  className?: string
}

export const HTMLContent: React.VFC<IContent> = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

const Content: React.VFC<IContent> = ({ content, className }) => (
  <div className={className}>{content}</div>
)

export default Content
