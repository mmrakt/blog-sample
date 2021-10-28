import React from 'react'
import DOMPurify from 'dompurify'
import marked from 'marked'

type IContent = {
  content: string
}

const Content: React.VFC<IContent> = ({ content }) => (
  // TODO: 整理
  // const source = content.replace(/\n/gi, '\n ')
  // marked.setOptions({
  //   breaks: true,
  //   gfm: true,
  // })
  // const html = marked(source).replace(/replaced_text/g, '')

  <div
    className="post-content"
    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(marked(content)) }}
  />
)

export default Content
