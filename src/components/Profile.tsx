import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Profile: React.VFC = () => (
  <>
    <h3 className="font-black">Profile</h3>
    <div className="flex mt-3 items-center">
      <StaticImage
        src="../../static/img/avatar.png"
        alt="mmrakt"
        layout="fixed"
        placeholder="blurred"
        width={80}
      />
      <div className="ml-3 ">
        <p>@mmrakt</p>
        <h4 className="font-black">みむ</h4>
      </div>
    </div>
    <div className="description mt-3">大阪出身の文系エンジニアです</div>
    <div className="mt-3">
      <a href="https://github.com/mmrakt" target="_blank" rel="noreferrer">
        <FontAwesomeIcon size="2x" icon={faGithub} />
      </a>
      <a
        href="https://twitter.com/mmrakt0716"
        className="ml-3"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon size="2x" icon={faTwitter} />
      </a>
    </div>
  </>
)

export default Profile
