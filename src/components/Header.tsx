import React from 'react'
import { Link, withPrefix, useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const Header: React.VFC = () => {
  const { site } = useStaticQuery<GatsbyTypes.SiteMetaQueryQuery>(
    graphql`
      query SiteDescriptionQuery {
        site {
          siteMetadata {
            description
          }
        }
      }
    `
  )

  return (
    <div className="bg-gray-800">
      <div className="items-center shadow-md">
        <div className="text-white p-4 text-center">
          <Link to="/" className="navbar-item" title="Logo">
            <Img src={`${withPrefix('/')}img/logo.png`} alt="logo" />
          </Link>
          <p className="text-white text-sm mt-2">
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
