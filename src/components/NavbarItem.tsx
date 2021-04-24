import React from 'react'
import { Link } from 'gatsby'

type IProps = {
  name: string
  to: string
  isDropdown?: boolean
}
const NavbarItem = (props: IProps) => {
  const { name, to, isDropdown } = props
  const [isOpened, setIsOpened] = React.useState(false)

  return (
    <div
      className="navbar-item hover:bg-blue-300 flex-1 flex text-lg ext-white items-center justify-center"
      onMouseOver={() => setIsOpened(true)}
      onFocus={() => setIsOpened(true)}
      onMouseOut={() => setIsOpened(false)}
      onBlur={() => setIsOpened(false)}
    >
      {isDropdown ? (
        <>
          <span>{name}</span>
          {isOpened && (
            <div>
              <ul>
                <li>カラーセラピー</li>
                <li>パーソナルカラー診断</li>
                <li>ワイヤービジューバッグ</li>
                <li>パーソナルコーチング</li>
              </ul>
            </div>
          )}
        </>
      ) : (
        <Link to={`/${to}`}>
          <span>{name}</span>
        </Link>
      )}
    </div>
  )
}

NavbarItem.defaultProps = {
  isDropdown: false,
}

export default NavbarItem
