import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

import useStringTrim from '../hooks/useStringTrim'

import CustomImage from './CustomImage'

const PostList = ({
  nodes: posts,
}: Pick<GatsbyTypes.ContentfulPostConnection, 'nodes'>) => (
  <div className="grid gap-8 grid-cols-auto-fit">
    {posts.map((node) => (
      <div key={node.slug} className="">
        <div className="box-outline mb-5 p-5 text-sm dark:bg-dark-gray bg-white">
          <div className="max-w-sm">
            {node?.coverImage ? (
              <CustomImage
                image={node?.coverImage}
                alt={`「${node.title}」のカバー画像`}
              />
            ) : (
              <StaticImage
                src="../../static/img/sample.jpeg"
                alt="その他カバー画像"
              />
            )}
          </div>
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
      </div>
    ))}
  </div>
)

export default PostList
