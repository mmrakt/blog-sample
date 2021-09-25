import React from 'react'
import { Link } from 'gatsby'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'

type IProps = {
  pageContext: {
    previousPagePath?: string
    nextPagePath?: string
  }
}

export const Pagination: React.VFC<IProps> = ({ pageContext }) => {
  // TODO: ページ番号も表示できるといいね
  const { previousPagePath, nextPagePath } = pageContext

  return (
    <div className="flex py-3">
      {previousPagePath && (
        <Link
          to={previousPagePath}
          rel="prev"
          className="flex items-center pr-2 py-2 text-gray-500 underline text-sm font-medium hover:bg-gray-50 bg-white border-2 border-solid"
        >
          <ChevronLeftIcon />
          <span className="">Prev</span>
        </Link>
      )}
      {nextPagePath && (
        <Link
          to={nextPagePath}
          rel="next"
          className="flex items-center ml-auto pl-2 py-2 text-gray-500 underline text-sm font-medium hover:bg-gray-50 bg-white border-2 border-solid"
        >
          <span>Next</span>
          <ChevronRightIcon />
        </Link>
      )}
    </div>
  )
}

export default Pagination
