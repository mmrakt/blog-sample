import React from 'react'
import styled from 'styled-components'
import Profile from './Profile'
import Tags from './Tags'

const SideBar: React.VFC = () => (
  <Aside>
    <Profile />
    <Tags />
  </Aside>
)

// NOTE: taiwindでwidthが何故か効かないので暫定対応
const Aside = styled.aside`
  padding: 1rem;
  background: white;
  @media screen and (min-width: 981px) {
    width: 22rem;
  }
`

export default SideBar
