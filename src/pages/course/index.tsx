import React from 'react'
import Img from 'gatsby-image'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../../components/Layout'
import MiddleHeading from '../../components/common/MiddleHeading'
import PageTitle from '../../components/common/PageTitle'

export const CoursePageIndex = () => {
  const image = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "color-therapy.jpg" }) {
          id
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <div className="mt-5 w-5/6 mx-auto">
        <PageTitle title="開講コース紹介" />
        <MiddleHeading title="カラーセラピー" />
        <Img fluid={image.file.childImageSharp.fluid} />
        <div className="text-lg text-center mt-5">
          カラーセラピーとは、色の生理的、心理的効果を活用して、心身のバランスを整える色彩療法のことです。
          「16（シックスティーン）タイプカラーメソッド®」の16タイプ・カラーセラピーは、16枚の5色配色カードの中から選ぶ配色によって、本質的な性格、人間関係、心身の状態、表現したい自分がわかります。
        </div>
        <MiddleHeading title="パーソナルカラー診断" />
        <div className="text-lg text-center mt-5">
          説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文
        </div>
        <MiddleHeading title="ワイヤービジューバッグ" />
        <div className="text-lg text-center mt-5">
          説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文
        </div>
        <MiddleHeading title="パーソナルコーチング" />
        <div className="text-lg text-center mt-5">
          説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文
        </div>
        <MiddleHeading title="ダイエット" />
        <div className="text-lg text-center mt-5">
          説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文
        </div>
        <MiddleHeading title="絵本の読み聞かせ" />
        <div className="text-lg text-center mt-5">
          説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文
        </div>
        <MiddleHeading title="色育" />
        <div className="text-lg text-center mt-5">
          説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文
        </div>
      </div>
    </Layout>
  )
}

export default CoursePageIndex
