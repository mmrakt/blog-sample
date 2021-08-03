import React from 'react'
import Title from './Title'

const Header: React.VFC = () => (
  <div className="bg-black h-10">
    <div className="flex items-center shadow-md">
      <div className="flex-1 text-white">
        <Title />
      </div>
    </div>
  </div>
)

export default Header
