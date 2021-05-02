import React from 'react'
import InfoTable from './InfoTable'

const AboutInfo: React.VFC = () => {
  const hoge = ''

  return (
    <div className="flex flex-wrap">
      <div className="w-full sm:w-1/2">
        <InfoTable />
      </div>
      <div className="w-full sm:w-1/2">fuga</div>
    </div>
  )
}

export default AboutInfo
