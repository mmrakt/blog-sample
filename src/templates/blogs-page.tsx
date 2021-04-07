import React from 'react'
import Img from 'gatsby-image'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/Layout'
import MiddleHeading from '../components/MiddleHeading'

export const BlogsPageTemplate = () => {
  const image = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "no-image.jpg" }) {
          id
          childImageSharp {
            fixed(width: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  const blogList = [
    {
      title: '記事タイトル①',
      content:
        '吾輩わがはいは猫である。名前はまだ無い。どこで生れたかとんと見当けんとうがつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た...',
    },
    {
      title: '記事タイトル②',
      content:
        'しかもあとで聞くとそれは書生という人間中で一番獰悪どうあくな種族であったそうだ。この書生というのは時々我々を捕つかまえて煮にて食うという話である...',
    },
    {
      title: '記事タイトル③',
      content:
        'しかしその当時は何という考もなかったから別段恐しいとも思わなかった。ただ彼の掌てのひらに載せられてスーと持ち上げられた時何だかフワフワした感じがあったばかりである...',
    },
  ]
  return (
    <Layout>
      <div className="mt-5">
        <div className="text-3xl mt-5 text-center">お知らせ一覧</div>
        <div className="w-5/6 mx-auto">
          {blogList.map((blog) => (
            <>
              <div className="flex mt-5">
                <div className="flex-2">
                  <Img fixed={image?.file?.childImageSharp?.fixed} />
                </div>
                <div className="flex-2">
                  <div className="pt-5 pl-5 text-xl font-bold">
                    <p>{blog.title}</p>
                  </div>
                  <div className="pt-5 pl-5">{blog.content}</div>
                </div>
              </div>
              <hr className="my-5" />
            </>
          ))}
        </div>

        {/* <MiddleHeading title="コンセプト" /> */}
      </div>
    </Layout>
  )
}

export default BlogsPageTemplate
