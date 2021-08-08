import React from 'react'
import { Link } from 'gatsby'
import { usePopupState, bindHover } from 'material-ui-popup-state/hooks'

type IProps = {
  name: string
  to: string
  isDropdown?: boolean
}

const NavbarItem = (props: IProps) => {
  const { name, to, isDropdown } = props
  const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' })

  return isDropdown ? (
    <>
      <div
        className="navbar-item hover:bg-blue-300 flex-1 flex text-lg ext-white items-center justify-center"
        /* eslint-disable react/jsx-props-no-spreading */ {...bindHover(
          popupState
        )}
      >
        {name}
      </div>
    </>
  ) : (
    <div className="navbar-item hover:bg-blue-300 flex-1 flex text-lg ext-white items-center justify-center">
      <Link to={`/${to}`}>{name}</Link>
    </div>
  )
}

NavbarItem.defaultProps = {
  isDropdown: false,
}

export default NavbarItem
