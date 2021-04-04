import React, {useState} from 'react'
import { Link } from 'gatsby'
// import github from './github-icon'
// import logo from '../img/logo.svg'

const Navbar = () => {
  const [active, setActive] = useState(false)
  const [navBarActiveClass, setNavBarActiveClass] = useState('')

  const toggleHamburger = () => {
    setActive(!active)
    if (active) {
      setNavBarActiveClass('is-active')
    }
  }

    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              {/* <img src="../img/svg/logo.svg" alt="Kaldi"/> */}
              <h1 className="font-black text-4xl">EightTree Demo</h1>
            </Link>
          </div>
          <div
            id="navMenu"
            className={`${navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                サイト紹介
              </Link>
              <Link className="navbar-item" to="/products">
                コース紹介
              </Link>
              <Link className="navbar-item" to="/blog">
                お知らせ
              </Link>
              <Link className="navbar-item" to="/contact">
                お問い合わせ
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                お申し込み
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src="../img/svg/github-icon.svg" alt="Github" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Navbar
