import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import PageTitle from '../components/PageTitle'
import Layout from '../components/Layout'
import MiddleHeading from '../components/MiddleHeading'

export const AboutPageTemplate = () => {
  const data = useStaticQuery(
    graphql`
      query aboutPageAssetQuery {
        graphCmsAsset(fileName: { eq: "about-page.jpg" }) {
          gatsbyImageData
        }
      }
    `
  )
  const image = data.graphCmsAsset.gatsbyImageData

  return (
    <Layout>
      <div className="mt-5">
        <PageTitle title="サロン・ド・エイツリー帝塚山について" />
        <GatsbyImage image={image} alt="カバー画像" />
        {/* <img src={url} alt="カバー画像" className="w-768 object-cover" /> */}
        <MiddleHeading title="コンセプト" />
        <div className="text-lg text-center mt-5">
          カラーセラピー、パーソナルカラー診断、ワイヤービジューバッグ、パーソナルコーチング(小中学生の個人学習指導)、ダイエット講座、絵本の読み聞かせと色育…など、8つのコンテンツで、人と人の繋がりを大切に、なりたい自分になるための空間作りを目指す
        </div>
      </div>
    </Layout>
  )
}

export default AboutPageTemplate
