import { Link } from 'gatsby'
import React from 'react'

const PostList = ({
  nodes: posts,
}: Pick<GatsbyTypes.ContentfulPostConnection, 'nodes'>) => (
  <>
    {posts.map((node) => (
      <>
        <div
          key={node.slug}
          className="box-outline mb-5 p-5 text-sm dark:bg-dark-gray bg-white"
        >
          <p className="mb-3">{node.date}</p>
          <div className="mb-3 text-lg font-bold">
            <Link to={`/${node.slug}`}>
              <span className="text-link">{node.title}</span>
            </Link>
          </div>
          <p className="flex flex-wrap mb-3">
            {node.tags &&
              node.tags.map((tag) => (
                <Link to={`/tag/${tag.slug}`} key={tag.slug}>
                  <span className="text-link mb-3 mr-5 underline">
                    #{tag.title}
                  </span>
                </Link>
              ))}
          </p>
          <div className="mb-3">
            {node.excerpt.excerpt.length > 100
              ? `${node.excerpt.excerpt.substring(0, 100)}...`
              : node.excerpt.excerpt}
          </div>
          <div className="flex">
            <div className="ml-auto">
              <Link to={`/${node.slug}`}>
                <span className="text-link underline cursor-pointer">
                  続きを読む
                </span>
              </Link>
            </div>
          </div>
        </div>
      </>
    ))}
  </>
)

export default PostList
