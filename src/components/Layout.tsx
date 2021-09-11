import React from 'react'
import MediaQuery from 'react-responsive'
import styled from 'styled-components'
import Footer from './Footer'
import Header from './Header'
import SideBar from './SideBar'

const TemplateWrapper = ({ children }) => (
  <div>
    <Header />
    <main className="bg-gray-100 py-10">
      <MediaQuery maxWidth={980}>
        <div className="py-5 px-3 mx-auto max-w-xl">
          {children}
          <SideBar />
        </div>
      </MediaQuery>
      <MediaQuery minWidth={981}>
        <div className="flex max-w-6xl mx-auto">
          <div>
            <SideBar />
          </div>
          <Children>{children}</Children>
        </div>
      </MediaQuery>
    </main>
    <Footer />
  </div>
)

// NOTE: tailwindだとなぜかwidth: 100%が適用されないのでstyled componentで代用
const Children = styled.div`
  width: 100%;
  margin-left: 4rem;
  max-width: 48rem;
`

export default TemplateWrapper
