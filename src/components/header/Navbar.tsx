import React from 'react'
import NavbarItem from './NavbarItem'

const Navbar = () => {
  const navbarItemList = [
    {
      name: 'サロン紹介',
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
    </nav>
  )
}

export default Navbar
