import React from 'react'

import Head from '../components/Head'
import Pagination from '../components/Pagination'
import PostList from '../components/PostList'
import PostListLayout from '../components/PostListLayout'

type IProps = {
  posts: GatsbyTypes.ContentfulPostConnection
  tags: GatsbyTypes.ContentfulTagConnection
}

export const PostsByTagTemplate = ({ pageContext, location }: any) => {
  const { group } = pageContext
  if (!group) return null

  const extractTagName = (pathName: string) => {
    const pathLength = pathName.length
    return location.pathname.match(/tag\/.*/)[0].substring(4, pathLength - 2)
  }

  return (
    <PostListLayout>
      <Head pageUrl={location.pathname} />
      <p className="mb-7 text-center">
        <b className="mr-2 text-lg">#{extractTagName(location.pathname)}</b>
        の記事
      </p>
      <PostList nodes={group} />
      <Pagination pageContext={pageContext} />
    </PostListLayout>
  )
}

export default PostsByTagTemplate
