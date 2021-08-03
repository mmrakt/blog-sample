import React from 'react'
import MediaQuery from 'react-responsive'
import styled from 'styled-components'
import Head from './Head'
import Footer from './footer'
import Header from './header'
import Profile from './Profile'

const TemplateWrapper = ({ children }) => (
  <div>
    <Head />
    <Header />
    <main className="bg-gray-100 py-10">
      <MediaQuery query="(max-width: 980px)">
        <div className="py-5 px-3 mx-auto max-w-xl">
          {children}
          <Profile />
        </div>
      </MediaQuery>
      <MediaQuery query="(min-width: 981px)">
        <div className="flex max-w-5xl mx-auto">
          <Children>{children}</Children>
          <div className="ml-10">
            <Profile />
          </div>
        </div>
      </MediaQuery>
    </main>
    <Footer />
  </div>
)

// NOTE: tailwindだとなぜかwidth: 100%が適用されないのでstyled componentで代用
const Children = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 48rem;
`

export default TemplateWrapper
