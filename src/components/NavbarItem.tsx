import React from 'react'
import { Link } from 'gatsby'
import Menu from 'material-ui-popup-state/HoverMenu'
import MenuItem from '@material-ui/core/MenuItem'
import {
  usePopupState,
  bindHover,
  bindMenu,
} from 'material-ui-popup-state/hooks'

type IProps = {
  name: string
  to: string
  isDropdown?: boolean
}

const NavbarItem = (props: IProps) => {
  const { name, to, isDropdown } = props
  const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' })

  return (
    <>
      {isDropdown ? (
        <>
          <div
            className="navbar-item hover:bg-blue-300 flex-1 flex text-lg ext-white items-center justify-center"
            /* eslint-disable react/jsx-props-no-spreading */ {...bindHover(
              popupState
            )}
          >
            {name}
          </div>
          <Menu
            /* eslint-disable react/jsx-props-no-spreading */
            {...bindMenu(popupState)}
            getContentAnchorEl={null}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          >
            <MenuItem onClick={popupState.close}>カラーセラピー</MenuItem>
            <MenuItem onClick={popupState.close}>パーソナルカラー診断</MenuItem>
            <MenuItem onClick={popupState.close}>
              ワイヤービジューバッグ
            </MenuItem>
            <MenuItem onClick={popupState.close}>ダイエット</MenuItem>
          </Menu>
        </>
      ) : (
        <div className="navbar-item hover:bg-blue-300 flex-1 flex text-lg ext-white items-center justify-center">
          <Link to={`/${to}`}>
            <span>{name}</span>
          </Link>
        </div>
      )}
    </>
  )
}

NavbarItem.defaultProps = {
  isDropdown: false,
}

export default NavbarItem
