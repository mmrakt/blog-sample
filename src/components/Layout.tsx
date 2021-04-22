import React from 'react'
import Head from './Head'
import Footer from './Footer'
import Navbar from './Navbar'

const TemplateWrapper = ({ children }) => (
  <div>
    <Head />
    <div className="mx-auto md:w-768">
      <Navbar />
      <main className="">{children}</main>
      <hr />
      <Footer />
    </div>
  </div>
)

export default TemplateWrapper
