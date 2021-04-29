import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'

const IndexPage: React.VFC = () => {
  const { gatsbyImageData } = useStaticQuery(
    graphql`
      query indexPageAssetQuery {
        graphCmsAsset(fileName: { eq: "index-page.jpg" }) {
          gatsbyImageData
        }
      }
    `
  ).graphCmsAsset

  return (
    <Layout>
      <div className="className">
        <GatsbyImage image={gatsbyImageData} alt="カバー画像" />
      </div>
    </Layout>
  )
}

export default IndexPage
