import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Profile: React.VFC = () => (
  <aside className="p-4 my-3 bg-white">
    <h3 className="font-black">Profile</h3>
    <div className="flex mt-3">
      <StaticImage
        src="../../static/img/avatar.png"
        alt="mmrakt"
        layout="fixed"
        placeholder="blurred"
        width={80}
      />
      <div className="ml-3">
        <p>@mmrakt</p>
        <h4 className="font-black">mimu</h4>
      </div>
    </div>
    <div className="description mt-3">
      おしゃれな部屋に住みたい系webエンジニアです。
      <br />
      ひとり暮らしのライフハック募集してます。
    </div>
  </aside>
)

export default Profile
