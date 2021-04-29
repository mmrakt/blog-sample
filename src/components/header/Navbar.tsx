import React from 'react'
import NavbarItem from './NavbarItem'
import MENU_ITEM_LIST from '../../utils/menu-item-list'

const Navbar = () => (
  <nav role="navigation" aria-label="main-navigation">
    <div className="navbar-start mt-5 h-14 bg-blue-400 w-text-center flex justify-center">
      {MENU_ITEM_LIST.map((item) =>
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

export default Navbar
