import React from 'react'
import Head from './Head'
import Footer from './footer'
import Header from './header'

const TemplateWrapper = ({ children }) => (
  <div>
    <Head />
    <div className="container mx-auto">
      <Header />
      <main className="">{children}</main>
      <hr />
      <Footer />
    </div>
  </div>
)

export default TemplateWrapper
