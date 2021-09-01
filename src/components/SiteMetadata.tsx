import { graphql, useStaticQuery } from 'gatsby'

const useSiteMetadata = () => {
  const { site } = useStaticQuery<GatsbyTypes.SiteMetaQueryQuery>(
    graphql`
      query SiteMetaQuery {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `
  )
  return site.siteMetadata
}

export default useSiteMetadata
