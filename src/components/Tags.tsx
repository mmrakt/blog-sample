import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import { MEDIA, Media } from '../config'
import { convertMediaNameToSlug } from '../utils'

const Tags: React.FC = () => {
  const { postsCountByOwned, postsCountByQiita, postsCountByZenn } =
    useStaticQuery<GatsbyTypes.PostsCountByMediaQuery>(
      graphql`
        query PostsCountByMedia {
          postsCountByOwned: allContentfulPost {
            totalCount
          }
          postsCountByQiita: allFeedQiita {
            totalCount
          }
          postsCountByZenn: allFeedZenn {
            totalCount
          }
        }
      `
    )

  const postsCountByMedia = (media: Media): number => {
    if (media === 'mimu-memo') {
      return postsCountByOwned.totalCount
    }
    if (media === 'Qiita') {
      return postsCountByQiita.totalCount
    }
    if (media === 'Zenn') {
      return postsCountByZenn.totalCount
    }
    return 0
  }

  return (
    <>
      <h3 className="mt-6 font-black">Media</h3>
      <div className="flex flex-wrap mt-2">
        {MEDIA.map((media) => (
          <Link to={`/${convertMediaNameToSlug(media)}`} key={media}>
            <span className="text-link mb-3 mr-5 underline text-sm">
              #{media}({postsCountByMedia(media)})
            </span>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Tags
