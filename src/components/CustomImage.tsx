import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

// TODO: 上手い型の付け方を考える
const CustomImage = (props) => {
  const { image, ...rest } = props
  const imageData = getImage(image)
  /* eslint-disable react/jsx-props-no-spreading */
  return <GatsbyImage image={imageData} {...rest} />
}

export default CustomImage
