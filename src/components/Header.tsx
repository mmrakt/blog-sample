import React from 'react'
import { Link, withPrefix, useStaticQuery, graphql } from 'gatsby'

const Header: React.VFC = () => {
  const { site } = useStaticQuery<GatsbyTypes.SiteDescriptionQuery>(
    graphql`
      query SiteDescription {
        site {
          siteMetadata {
            description
          }
        }
      }
    `
  )

  return (
    <div className="dark:bg-dark-black bg-gray-800">
      <div className="items-center shadow-md">
        <div className="p-4 text-center text-white">
          <Link to="/" className="navbar-item" title="Logo">
            <img
              className="block m-auto w-max h-auto"
              width="190"
              height="30"
              src={`${withPrefix('/')}img/logo.png`}
              alt="logo"
            />
          </Link>
          <p className="mt-2 text-white text-sm">
            {site.siteMetadata.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Header
