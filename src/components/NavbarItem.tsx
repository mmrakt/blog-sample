import React from 'react'
import { Link } from 'gatsby'

type IProps = {
  name: string
  to: string
}
const NavbarItem = (props: IProps) => {
  const { name, to } = props
  return (
    <div className="navbar-item hover:bg-blue-300 flex-1 flex text-lg ext-white items-center justify-center">
      <Link to={`/${to}`}>
        <span>{name}</span>
      </Link>
    </div>
  )
}

export default NavbarItem
