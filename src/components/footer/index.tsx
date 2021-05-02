import React from 'react'
import FooterLinkItem from './FooterLinkItem'
import MENU_ITEM_LIST from '../../utils/menu-item-list'

const Footer = () => (
  <footer className="">
    <div className="p-6 text-center">
      {MENU_ITEM_LIST.map((item) => (
        <FooterLinkItem name={item.name} to={item.to} key={item.name} />
      ))}
      <div />
      <div className="mt-10">
        <p>@eighttree</p>
      </div>
    </div>
  </footer>
)

export default Footer
