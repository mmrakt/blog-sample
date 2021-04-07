import React from 'react'
import Layout from '../components/Layout'
import MiddleHeading from '../components/MiddleHeading'

export const AboutPageTemplate = () => (
  <Layout>
    <div className="mt-5">
      <div className="text-3xl mt-5 text-center">
        サロン・ド・エイツリー帝塚山について
      </div>
      <MiddleHeading title="コンセプト" />
      <div className="text-lg text-center mt-5">
        カラーセラピー、パーソナルカラー診断、ワイヤービジューバッグ、パーソナルコーチング(小中学生の個人学習指導)、ダイエット講座、絵本の読み聞かせと色育…など、8つのコンテンツで、人と人の繋がりを大切に、なりたい自分になるための空間作りを目指す
      </div>
    </div>
  </Layout>
)

export default AboutPageTemplate
