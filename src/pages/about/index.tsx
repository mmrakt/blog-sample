import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import PageTitle from '../../components/common/PageTitle'
import Layout from '../../components/Layout'
import CoverImage from '../../components/common/CoverImage'
import MiddleHeading from '../../components/common/MiddleHeading'
import AboutInfo from '../../components/AboutInfo'

export const AboutPage = () => {
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
        <div className="mt-10 items-center">
          <CoverImage image={image} />
        </div>
        <div className="mt-10">
          <MiddleHeading title="コンセプト" />
        </div>
        <div className="text-lg text-center mt-10 leading-loose">
          カラーセラピー、パーソナルカラー診断、ワイヤービジューバッグ、パーソナルコーチング(小中学生の個人学習指導)、ダイエット講座、絵本の読み聞かせと色育…など、8つのコンテンツで、人と人の繋がりを大切に、なりたい自分になるための空間作りを目指す
        </div>
        <div className="mt-10">
          <MiddleHeading title="サロン情報" />
        </div>
        <div className="mt-10">
          <AboutInfo />
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
