import React from 'react'
import { Link, withPrefix, useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

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
            <Img src={`${withPrefix('/')}img/logo.png`} alt="logo" />
          </Link>
          <p className="mt-2 text-white text-sm">
            {site.siteMetadata.description}
          </p>
        </div>
      </div>
    </div>
  )
}

const Img = styled.img`
  display: block;
  margin: auto;
`

export default Header
