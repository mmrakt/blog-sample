import React from 'react'
import MediaQuery from 'react-responsive'

import Layout from './Layout'
import SideBar from './SideBar'

const PostListLayout: React.FC = ({ children }) => (
  <Layout>
    <MediaQuery maxWidth={980}>
      <div className="mx-auto px-3 py-5 max-w-xl">
        {children}
        <SideBar />
      </div>
    </MediaQuery>
    <MediaQuery minWidth={981}>
      <div className="flex mx-auto max-w-6xl">
        <div className="w-full">{children}</div>
        <div className="ml-10">
          <SideBar />
        </div>
      </div>
    </MediaQuery>
  </Layout>
)

export default PostListLayout
