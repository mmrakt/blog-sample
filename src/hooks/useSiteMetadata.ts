import { useStaticQuery, graphql } from 'gatsby'

const useSiteMetadata = () => {
  const { site } = useStaticQuery<GatsbyTypes.SiteMetaQueryQuery>(
    graphql`
      query SiteMetaQuery {
        site {
          siteMetadata {
            siteName
            description
            siteUrl
            lang
            locale
            type
          }
        }
      }
    `
  )
  return site.siteMetadata
}

export default useSiteMetadata
