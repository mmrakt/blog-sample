import React, { useState } from 'react'
import { Link } from 'gatsby'
import NavbarItem from './NavbarItem'

const Navbar = () => {
  const [active, setActive] = useState(false)
  const navbarItemList = [
    {
      name: 'サイト紹介',
      to: 'about',
    },
    {
      name: 'コース紹介',
      to: 'course',
    },
    {
      name: 'お知らせ',
      to: 'blog',
    },
    {
      name: 'お問い合わせ',
      to: 'contact',
    },
    {
      name: 'お申し込み',
      to: 'contact/example',
    },
  ]

  return (
    <nav role="navigation" aria-label="main-navigation">
      <div className="">
        <div className="navbar-brand mt-5">
          <Link to="/" className="navbar-item" title="Logo">
            <h1 className="font-black text-4xl mt-3">EightTree Demo</h1>
          </Link>
        </div>
        <div className="navbar-start mt-5 h-14 bg-blue-400 w-text-center flex justify-center">
          {navbarItemList.map((item) =>
            item.name === 'コース紹介' ? (
              <NavbarItem
                key={item.name}
                name={item.name}
                to={item.to}
                isDropdown
              />
            ) : (
              <NavbarItem key={item.name} name={item.name} to={item.to} />
            )
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
