import React from 'react'
import MediaQuery from 'react-responsive'
import Title from './Title'
import Navbar from './Navbar'
import HamburgerMenu from './HamburgerMenu'

const Header: React.VFC = () => (
  <div className="">
    <MediaQuery query="(max-width: 980px)">
      <div className="flex items-center shadow-md">
        <div className="flex-1">
          <Title />
        </div>
        <div className="">
          <HamburgerMenu />
        </div>
      </div>
    </MediaQuery>
    <MediaQuery query="(min-width: 981px) shadow-md">
      <Title />
      <Navbar />
    </MediaQuery>
  </div>
)

export default Header
