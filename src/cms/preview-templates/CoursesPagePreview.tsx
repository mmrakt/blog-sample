import React from 'react'
import { CoursesPageTemplate } from '../../templates/courses-page'

type IProps = {
  entry: {
    getIn: (...string) => any
  }
  widgetFor: (string) => any
}

const CoursesPagePreview = (props: IProps) => {
  const { entry, widgetFor } = props

  return <CoursesPageTemplate />
}

export default CoursesPagePreview
