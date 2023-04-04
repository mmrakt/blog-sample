import dayjs from 'dayjs'
import { Link } from 'gatsby'
import React from 'react'

import LoadingSpinner from './LoadingSpinner'

const PostList = ({ nodes }: any) => {
  if (!nodes) {
    return (
      <div className="flex justify-center items-center">
        <LoadingSpinner />
      </div>
    )
  }

  return (
    <div className="animate-slide-in">
      {nodes.map(({ node }) => (
        <>
          {node?.link ? (
            <a href={node.link}>
              <Post node={node} />
            </a>
          ) : (
            <Link to={`/${node.slug}`} key={node.slug}>
              <Post node={node} />
            </Link>
          )}
        </>
      ))}
    </div>
  )
}

const Post = ({ node }: any) => (
  <div
    key={node.slug}
    className="h-full dark:bg-dark-gray bg-white transition ease-in-out duration-200 hover:scale-105 mb-4 box-outline"
  >
    <div className="p-5 text-sm">
      <p className="text-base mb-3">
        {dayjs.unix(node.date).format('YYYY.MM.DD')}
      </p>
      <div className="mb-3 text-lg font-bold">
        <span className="text-link">{node.title}</span>
      </div>
      <p className="mb-3 flex flex-wrap">
        {node.tags &&
          node.tags.map((tag) => (
            <Link to={`/tag/${tag.slug}`} key={tag.slug}>
              <span className="text-link mb-3 mr-5 underline">
                #{tag.title}
              </span>
            </Link>
          ))}
      </p>
    </div>
  </div>
)
export default PostList
