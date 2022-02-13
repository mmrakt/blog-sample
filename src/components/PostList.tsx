import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

import CustomImage from './CustomImage'

const PostList = ({
  nodes: posts,
}: Pick<GatsbyTypes.ContentfulPostConnection, 'nodes'>) => (
  <div className="grid grid-cols-auto-fit grid-rows-auto-fit gap-12">
    {posts.map((node) => (
      <div key={node.slug} className="h-full dark:bg-dark-gray bg-white">
        <div className="aspect-[2/1]">
          {node?.coverImage ? (
            <CustomImage
              image={node?.coverImage}
              alt={`「${node.title}」のカバー画像`}
            />
          ) : (
            <StaticImage
              src="../../static/img/sample.jpeg"
              alt="その他カバー画像"
              aspectRatio={2 / 1}
            />
          )}
        </div>
        <div className="box-outline p-5 text-sm">
          <p className="mb-3">{node.date}</p>
          <div className="mb-3 text-lg font-bold">
            <Link to={`/${node.slug}`}>
              <span className="text-link">{node.title}</span>
            </Link>
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
          <div className="flex">
            <div className="ml-auto">
              <Link to={`/${node.slug}`}>
                <span className="text-link cursor-pointer underline">
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
