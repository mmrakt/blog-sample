import * as React from 'react'
import * as renderer from 'react-test-renderer'

import Pagination from '../Pagination'

it('renders correctly', () => {
  const pageContext = {
    previousPagePath: '/',
    nextPagePath: '/page/3',
  }
  const tree = renderer
    .create(<Pagination pageContext={pageContext} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
