import React from 'react'

import Head from '../components/Head'
import Pagination from '../components/Pagination'
import PostList from '../components/PostList'
import PostListLayout from '../components/PostListLayout'

const PostsTemplate = ({ pageContext, location }: any) => {
  const { group: posts } = pageContext

  return (
    <PostListLayout>
      <Head pageUrl={location.pathname} />
      <PostList nodes={posts} />
      <Pagination pageContext={pageContext} />
    </PostListLayout>
  )
}

export default PostsTemplate
