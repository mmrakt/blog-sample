import React from 'react'
import Img, {FluidObject} from 'gatsby-image'

type IProps = {
  alt: string
  childImageSharp?: {
    fluid: FluidObject | FluidObject[]
  }
  image: {
    childImageSharp: {
      fluid: FluidObject | FluidObject[]
    }
  }
  style?: {string}
}

const PreviewCompatibleImage = ({ imageInfo }: {imageInfo: IProps}) => {
  const imageStyle = { borderRadius: '5px' }
  const { alt = '', childImageSharp, image } = imageInfo

  if (!!image && !!image.childImageSharp) {
    return (
      <Img style={imageStyle} fluid={image.childImageSharp.fluid} alt={alt} />
    )
  }

  if (childImageSharp) {
    return <Img style={imageStyle} fluid={childImageSharp.fluid} alt={alt} />
  }

  if (!!image && typeof image === 'string')
    return <img style={imageStyle} src={image} alt={alt} />

  return null
}

export default PreviewCompatibleImage
