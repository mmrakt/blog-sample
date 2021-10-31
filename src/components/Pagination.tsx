import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { Link } from 'gatsby'
import React from 'react'

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
          className="box-outline text-link flex items-center pr-2 py-2 dark:text-white underline text-sm font-medium dark:bg-dark-gray bg-white"
        >
          <ChevronLeftIcon />
          <span className="">Prev</span>
        </Link>
      )}
      {nextPagePath && (
        <Link
          to={nextPagePath}
          rel="next"
          className="box-outline text-link flex items-center ml-auto pl-2 py-2 dark:text-white underline text-sm font-medium dark:bg-dark-gray bg-white"
        >
          <span>Next</span>
          <ChevronRightIcon />
        </Link>
      )}
    </div>
  )
}

export default Pagination
