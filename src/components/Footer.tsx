import React from 'react'
import FooterLinkItem from './FooterLinkItem'

const Footer = () => {
  const footerLinkItemList = [
    {
      name: 'サイト紹介',
      to: 'about',
    },
    {
      name: 'コース紹介',
      to: 'products',
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
    <footer className="">
      <div className="p-6 text-center">
        {footerLinkItemList.map((item) => (
          <FooterLinkItem name={item.name} to={item.to} key={item.name} />
        ))}
        <div />
        <div className="mt-10">
          <p>@eighttree</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
