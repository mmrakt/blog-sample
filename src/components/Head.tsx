import React from 'react'
import { Helmet } from 'react-helmet'
import { withPrefix } from 'gatsby'
import useSiteMetadata from './SiteMetadata'

type IProps = {
  pageTitle?: string
  pageDescription?: string
  pageUrl?: string
  pageImage?: string
  pageImageWidth?: string
  pageImageHeight?: string
}

const Head: React.VFC<IProps> = ({
  pageTitle,
  pageDescription,
  pageUrl,
  pageImage,
  pageImageWidth,
  pageImageHeight,
}) => {
  const siteMetadata = useSiteMetadata()

  const title = pageTitle
    ? `${pageTitle} | ${siteMetadata.title}`
    : siteMetadata.title

  const description = pageDescription || siteMetadata.description

  const siteUrl = pageUrl
    ? `${siteMetadata.siteUrl}${pageUrl}`
    : siteMetadata.siteUrl

  const imageUrl = pageImage
    ? `${siteMetadata.siteUrl}${pageImage}`
    : `${siteMetadata.siteUrl}/thumb.png`
  const imageWidth = pageImageWidth || '1280'
  const imageHeight = pageImageHeight || '640'

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={siteUrl} />
      <link
        rel="icon"
        href={`${withPrefix('/')}img/favicon.svg`}
        type="image/svg+xml"
      />
      <meta name="theme-color" content="#fff" />
      <meta property="og:type" content="business.business" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:locale" content={siteMetadata.locale} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image.width" content={imageWidth} />
      <meta property="og:image.height" content={imageHeight} />
      <meta
        property="og:image"
        content={`${withPrefix('/')}img/og-image.jpg`}
      />
    </Helmet>
  )
}

export default Head
