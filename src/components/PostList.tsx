import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

import CustomImage from './CustomImage'

const PostList = ({
  nodes: posts,
}: Pick<GatsbyTypes.ContentfulPostConnection, 'nodes'>) => (
  <div className="grid grid-cols-auto-fit grid-rows-auto-fit gap-12">
    {posts.map((node) => (
      <Link to={`/${node.slug}`} key={node.slug}>
        <div
          key={node.slug}
          className="h-full dark:bg-dark-gray bg-white transition ease-in-out  hover:scale-105  duration-200"
        >
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
            <p className="text-base mb-3">{node.date}</p>
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
      </Link>
    ))}
  </div>
)

export default PostList
