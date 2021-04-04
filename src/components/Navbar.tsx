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
              <img src="../img/svg/logo.svg" alt="Kaldi" style={{ width: '88px' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              role="button"
              tabIndex={0}
              className={`navbar-burger burger ${navBarActiveClass}`}
              data-target="navMenu"
              onClick={toggleHamburger}
              onKeyDown={toggleHamburger}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`${navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered font-black">
              <button type="button" className="bg-blue-500">piyo</button>
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/products">
                Products
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                Form Examples
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
