import { Link } from 'gatsby'
import React from 'react'

import ChevronLeft from './common/ChevronLeft'
import ChevronRight from './common/ChevronRight'

type IProps = {
  pageContext: {
    index?: number
    first?: boolean
    last?: boolean
    additionalContext: any
  }
}

export const Pagination: React.VFC<IProps> = ({ pageContext }) => {
  // TODO: ページ番号も表示できるといいね
  const { index, first, last, additionalContext } = pageContext
  const prevPagePath = index - 1 === 1 ? '/' : `/page/${index - 1}`
  const nextPagePath = `/page/${index + 1}`

  return (
    <div className="flex py-3">
      {!first && (
        <Link
          to={prevPagePath}
          rel="prev"
          className="box-outline text-link flex items-center pr-2 py-2 dark:text-white underline text-sm font-medium dark:bg-dark-gray bg-white"
        >
          <ChevronLeft />
          <span className="">Prev</span>
        </Link>
      )}
      {!last && (
        <Link
          to={nextPagePath}
          rel="next"
          className="box-outline text-link flex items-center ml-auto pl-2 py-2 dark:text-white underline text-sm font-medium dark:bg-dark-gray bg-white"
        >
          <span>Next</span>
          <ChevronRight />
        </Link>
      )}
    </div>
  )
}

export default Pagination
