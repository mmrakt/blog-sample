import React from 'react'
import { Helmet } from 'react-helmet'
import { withPrefix } from 'gatsby'
import useSiteMetadata from './SiteMetadata'

type IProps = {
  pageTitle?: string
  pageDescription?: string
  pageUrl?: string
}

const Head: React.VFC<IProps> = ({ pageTitle, pageDescription, pageUrl }) => {
  const siteMetadata = useSiteMetadata()

  const title = pageTitle
    ? `${pageTitle} | ${siteMetadata.title}`
    : siteMetadata.title

  const description = pageDescription || siteMetadata.description

  const siteUrl = pageUrl
    ? `${siteMetadata.siteUrl}${pageUrl}`
    : siteMetadata.siteUrl

  // const imgurl = pageimg
  //   ? `${siteMetadata.siteUrl}${pageimg}`
  //   : blogimg || `${siteMetadata.siteUrl}/thumb.jpg`
  // const imgw = pageimgw || 1280
  // const imgh = props.pageimgh || 640

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={siteUrl} />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${withPrefix('/')}img/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        href={`${withPrefix('/')}img/favicon.svg`}
        type="image/svg+xml"
      />

      <link
        rel="mask-icon"
        href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
        color="#ff4400"
      />
      <meta name="theme-color" content="#fff" />

      <meta property="og:type" content="business.business" />
      <meta property="og:title" content={title} />
      <meta property="og:url" content="/" />
      <meta
        property="og:image"
        content={`${withPrefix('/')}img/og-image.jpg`}
      />
    </Helmet>
  )
}

export default Head
