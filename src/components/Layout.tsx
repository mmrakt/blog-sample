import React from 'react'
import Head from './Head'
import Footer from './Footer'
import Navbar from './Navbar'
// import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Head />
    <Navbar />
    <main>{children}</main>
    <hr />
    <Footer />
  </div>
)

export default TemplateWrapper
