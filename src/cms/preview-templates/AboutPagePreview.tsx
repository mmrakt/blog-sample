import React from 'react'
import { AboutPageTemplate } from '../../templates/about-page'

type IProps = {
  entry: {
    getIn: (...string) => any
  }
  widgetFor: (string) => any
}

const AboutPagePreview = (props: IProps) => {
  const { entry, widgetFor } = props

  return (
    <AboutPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
  )

}

export default AboutPagePreview
