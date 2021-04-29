import React from 'react'
import MediaQuery from 'react-responsive'
import Head from './Head'
import Footer from './Footer'
import Navbar from './Navbar'
import HamburgerMenu from './HamburgerMenu'

const TemplateWrapper = ({ children }) => (
  <div>
    <Head />
    <div className="mx-auto md:w-768">
      <MediaQuery query="(max-width: 360px)"><HamburgerMenu /></MediaQuery>
      <MediaQuery query="(min-width: 361px)"><Navbar /></MediaQuery>
      
      <main className="">{children}</main>
      <hr />
      <Footer />
    </div>
  </div>
)

export default TemplateWrapper
