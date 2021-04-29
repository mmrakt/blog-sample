import React from 'react'
import { Link } from 'gatsby'

type IProps = {
  name: string
  to: string
}
const FooterLinkItem = (props: IProps) => {
  const { name, to } = props
  return (
    <Link
      className="navbar-item ml-3 hover:underline hover:text-gray-600"
      to={`/${to}`}
    >
      {name}
    </Link>
  )
}

export default FooterLinkItem
