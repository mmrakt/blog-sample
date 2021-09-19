import React from 'react'
import { Link, withPrefix } from 'gatsby'
import styled from 'styled-components'

const Header: React.VFC = () => (
  <div className="bg-gray-800">
    <div className="items-center shadow-md">
      <div className="text-white p-4 text-center">
        <Link to="/" className="navbar-item" title="Logo">
          <Img src={`${withPrefix('/')}img/logo.png`} alt="logo" />
        </Link>
        <p className="text-white text-sm mt-2">
          文系卒底辺エンジニアの成長記録
        </p>
      </div>
    </div>
  </div>
)

const Img = styled.img`
  display: block;
  margin: auto;
`

export default Header
