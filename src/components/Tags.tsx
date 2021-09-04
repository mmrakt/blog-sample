import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

const Tags = () => {
  const { tags, postsGroupByTag } = useStaticQuery<GatsbyTypes.TagsQuery>(
    graphql`
      query Tags {
        tags: allContentfulTag {
          edges {
            node {
              title
              slug
            }
          }
        }
        postsGroupByTag: allContentfulPost {
          group(field: tags___slug) {
            totalCount
            fieldValue
          }
        }
      }
    `
  )

  return (
    <>
      <h3 className="font-black mt-6">Tags</h3>
      <div className="flex flex-wrap mt-2">
        {tags &&
          tags.edges.map(
            ({ node }) =>
              postsGroupByTag &&
              postsGroupByTag.group.map(
                (postGroupByTag) =>
                  node.slug === postGroupByTag.fieldValue && (
                    <Link to={`/tag/${node.slug}`} key={node.slug}>
                      <span className="mr-5 mb-3 text-sm underline hover:text-gray-500">
                        #{node.title}({postGroupByTag.totalCount})
                      </span>
                    </Link>
                  )
              )
          )}
      </div>
    </>
  )
}

export default Tags
