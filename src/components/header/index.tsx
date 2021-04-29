import React from 'react'
import MediaQuery from 'react-responsive'
import Title from './Title'
import Navbar from './Navbar'
import HamburgerMenu from './HamburgerMenu'

const Header: React.VFC = () => (
  <div className="">
    <MediaQuery query="(max-width: 360px)">
      <div className="flex items-center">
        <div className="flex-1">
          <Title />
        </div>
        <div className="">
          <HamburgerMenu />
        </div>
      </div>
    </MediaQuery>
    <MediaQuery query="(min-width: 361px)">
      <Title />
      <Navbar />
    </MediaQuery>
  </div>
)

export default Header
