import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'

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
      <h3 className="mt-6 font-black">Tags</h3>
      <div className="flex flex-wrap mt-2">
        {tags &&
          tags.edges.map(
            ({ node }) =>
              postsGroupByTag &&
              postsGroupByTag.group.map(
                (postGroupByTag) =>
                  node.slug === postGroupByTag.fieldValue && (
                    <Link to={`/tag/${node.slug}`} key={node.slug}>
                      <span className="text-link mb-3 mr-5 underline text-sm">
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
