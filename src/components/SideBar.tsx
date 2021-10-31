import React from 'react'

import Profile from './Profile'
import Tags from './Tags'

const SideBar: React.VFC = () => (
  <aside className="box-outline pc:mt-0 mt-10 p-4 pc:w-72 dark:bg-dark-gray bg-white">
    <Profile />
    <Tags />
  </aside>
)

export default SideBar
