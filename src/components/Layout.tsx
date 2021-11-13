import React from 'react'
import MediaQuery from 'react-responsive'

import Footer from './Footer'
import Header from './Header'
import SideBar from './SideBar'

const TemplateWrapper: React.FC = ({ children }) => (
  <div className="dark:text-white">
    <Header />
    <main className="pc:py-10 py-6 dark:bg-dark-black bg-gray-100">
      <MediaQuery maxWidth={980}>
        <div className="mx-auto px-3 py-5 max-w-xl">
          {children}
          <SideBar />
        </div>
      </MediaQuery>
      <MediaQuery minWidth={981}>
        <div className="flex mx-auto max-w-6xl">
          <div>
            <SideBar />
          </div>
          <div className="ml-16 w-full max-w-3xl">{children}</div>
        </div>
      </MediaQuery>
    </main>
    <Footer />
  </div>
)

export default TemplateWrapper
