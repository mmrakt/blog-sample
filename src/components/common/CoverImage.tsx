import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

type IProps = {
  image: any
}
const CoverImage: React.VFC<IProps> = ({ image }) => {
  const hoge = ''

  return (
    <div className="object-cover">
      <GatsbyImage image={image} alt="カバー画像" />
    </div>
  )
}

export default CoverImage
