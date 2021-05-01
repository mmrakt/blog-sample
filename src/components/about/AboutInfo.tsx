import React from 'react'

const AboutInfo: React.VFC = () => {
  const hoge = ''

  return (
    <div className="flex">
      <div className="flex-2">
        <div className="text-2xl">
          <p>サロン・ド・エイツリー帝塚山</p>
        </div>
        <table className="table-fixed">
          <tbody className="divide-y">
            <tr className="">
              <th>住所</th>
              <td className="text-md">
                <p>〒545-0037</p>
                <p>大阪府大阪市阿倍野区帝塚山１丁目２３−１４</p>
                <p>帝塚山セントポリア</p>
              </td>
            </tr>
            <tr className="">
              <th>最寄駅</th>
              <td className="ml-5">南海高野線：帝塚山駅 徒歩6分</td>
            </tr>
            <tr className="">
              <th>電話番号</th>
              <td className="ml-5">000-0000-0000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex-1">fuga</div>
    </div>
  )
}

export default AboutInfo
