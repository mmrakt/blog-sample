import React from 'react'
import { IndexPageTemplate } from '../../templates/index-page'

type IProps = {
  entry: {
    getIn: (any) => any
  }
  getAsset: (any) => any
}

const IndexPagePreview = (props: IProps) => {
  const { entry, getAsset } = props
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <IndexPageTemplate
        image={getAsset(data.image)}
        title={data.title}
        heading={data.heading}
        subheading={data.subheading}
        description={data.description}
        intro={data.intro || { blurbs: [] }}
        mainpitch={data.mainpitch || {}}
      />
    )
  } 
  return <div>Loading...</div> 
}

export default IndexPagePreview
