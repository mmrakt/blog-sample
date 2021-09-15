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
  margin-top: 2.5rem;
  @media screen and (min-width: 981px) {
    width: 18rem;
    margin-top: 0px;
  }
`

export default SideBar
