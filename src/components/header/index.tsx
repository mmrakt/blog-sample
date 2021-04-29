import React from 'react'
import MediaQuery from 'react-responsive'
import Navbar from './Navbar'
import HamburgerMenu from './HamburgerMenu'

const Header: React.VFC = () => {
  const hoge = ''

  return (
    <div className="className">
      <MediaQuery query="(max-width: 360px)">
        <HamburgerMenu />
      </MediaQuery>
      <MediaQuery query="(min-width: 361px)">
        <Navbar />
      </MediaQuery>
    </div>
  )
}

export default Header
