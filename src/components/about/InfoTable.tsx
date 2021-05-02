import React from 'react'

const InfoTable: React.VFC = () => {
  const hoge = ''

  return (
    <>
      <div className="text-2xl">
        <p>サロン・ド・エイツリー帝塚山</p>
      </div>
      <table className="leading-loose">
        <tbody className="divide-y">
          <tr>
            <th className="text-sm sm:text-base">住所</th>
            <td className="text-sm sm:text-base py-2 pl-3">
              〒545-0037
              <br />
              大阪府大阪市阿倍野区帝塚山１丁目２３−１４
              <br />
              帝塚山セントポリア
            </td>
          </tr>
          <tr>
            <th className="text-sm sm:text-base py-2">最寄駅</th>
            <td className="text-sm sm:text-base py-2 pl-3">
              南海高野線：帝塚山駅 徒歩6分
            </td>
          </tr>
          <tr>
            <th className="text-sm sm:text-base py-2">電話番号</th>
            <td className="text-sm sm:text-base py-2 pl-3">000-0000-0000</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default InfoTable
