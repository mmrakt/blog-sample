import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'

// TODO: 上手い型の付け方を考える
const CustomImage = (props) => {
  const { image, ...rest } = props
  const imageData = getImage(image)
  return <GatsbyImage image={imageData} {...rest} className="h-full w-auto" />
}

export default CustomImage
