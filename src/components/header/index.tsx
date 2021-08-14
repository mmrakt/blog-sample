import React from 'react'
import { Link } from 'gatsby'

const Header: React.VFC = () => (
  <div className="bg-black">
    <div className="items-center shadow-md">
      <div className="text-white p-4">
        <h1 className="font-black text-xl m-0">
          <Link to="/" className="navbar-item" title="Logo">
            mamimu memo
          </Link>
        </h1>
        <p className="text-white text-sm">文系卒底辺エンジニアの成長記録</p>
      </div>
    </div>
  </div>
)

export default Header
