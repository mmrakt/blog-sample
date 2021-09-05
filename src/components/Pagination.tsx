import React from 'react'
import { Link } from 'gatsby'

type IProps = {
  pageContext: {
    previousPagePath: string
    nextPagePath: string
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
          className="relative inline-flex px-2 py-2 border bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        >
          &lt;&nbsp;Previous
        </Link>
      )}
      {nextPagePath && (
        <Link
          to={nextPagePath}
          rel="next"
          className="ml-auto relative inline-flex px-2 py-2 border bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        >
          Next&nbsp;&gt;
        </Link>
      )}
    </div>
  )
}

export default Pagination
