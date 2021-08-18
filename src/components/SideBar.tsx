import React from 'react'
import Profile from './Profile'
import Tags from './Tags'

const SideBar: React.VFC = () => (
  <aside className="max-w-sm p-4 my-3 bg-white">
    <Profile />
    <Tags />
  </aside>
)

export default SideBar
