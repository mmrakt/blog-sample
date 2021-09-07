import React from 'react'
import { Link } from 'gatsby'

type IProps = {
  posts: {
    date: string
    slug: string
    title: string
    content: {
      content: string
    }
    excerpt: {
      excerpt: string
    }
    tags: {
      title: string
      slug: string
    }[]
  }[]
}
const PostList: React.VFC<IProps> = ({ posts }) => (
  <>
    {posts.map((node) => (
      <div key={node.slug} className="mb-5 p-5  bg-white text-sm">
        <p className="mb-3">{node.date}</p>

        <div className="text-lg font-bold mb-3">
          <Link to={`/${node.slug}`}>
            <span className="hover:text-gray-500">{node.title}</span>
          </Link>
        </div>
        <p className="flex flex-wrap mb-3">
          {node.tags &&
            node.tags.map((tag) => (
              <Link to={`/tag/${tag.slug}`} key={tag.slug}>
                <span className="mr-5 mb-3 underline hover:text-gray-500">
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
          <div className="underline ml-auto ">
            <Link to={`/${node.slug}`}>
              <span className="hover:text-gray-400 cursor-pointer">
                続きを読む
              </span>
            </Link>
          </div>
        </div>
      </div>
    ))}
  </>
)

export default PostList
