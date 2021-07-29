import React from 'react'
import Head from './Head'
import Footer from './footer'
import Header from './header'

const TemplateWrapper = ({ children }) => (
  <div>
    <Head />
    <Header />
    <main className="bg-gray-100">{children}</main>
    <Footer />
  </div>
)

export default TemplateWrapper
