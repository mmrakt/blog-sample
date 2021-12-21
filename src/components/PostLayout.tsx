import React from 'react'
import MediaQuery from 'react-responsive'

import Layout from './Layout'
import SideBar from './SideBar'
import SocialButtons from './SocialButtons'

type IProps = {
  title: string
  url: string
}

const PostLayout: React.FC<IProps> = ({ children, title, url }) => (
  <Layout>
    <MediaQuery maxWidth={980}>
      <div className="mx-auto px-3 py-5 max-w-xl">
        {children}
        <SideBar />
      </div>
    </MediaQuery>
    <MediaQuery minWidth={981}>
      <div className="relative flex mx-auto max-w-6xl">
        <SocialButtons title={title} url={url} />
        <div className="max-w-[824px]">{children}</div>
        <div className="ml-10">
          <SideBar />
        </div>
      </div>
    </MediaQuery>
  </Layout>
)

export default PostLayout
