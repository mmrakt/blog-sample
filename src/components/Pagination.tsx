import React from 'react'
import { Link } from 'gatsby'

type IProps = {
  pageContext: {
    currentPage: number
    numPages: number
  }
}

export const Pagination: React.VFC<IProps> = ({ pageContext }) => {
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? '/' : `/page/${(currentPage - 1).toString()}`
  const nextPage = `/page/${(currentPage + 1).toString()}`

  return (
    <div className="flex items-center justify-center">
      {!isFirst && (
        <Link
          to={prevPage}
          rel="prev"
          className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        >
          &lt;
        </Link>
      )}
      {Array.from({ length: numPages }, (_, i) => (
        <Link
          key={`pagination-number${i + 1}`}
          to={`/page/${i === 0 ? '' : i + 1}`}
          className={`${
            currentPage === i + 1 ? 'bg-indigo-50 border-indigo-500' : ''
          } bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
        >
          {i + 1}
        </Link>
      ))}
      {!isLast && (
        <Link
          to={nextPage}
          rel="next"
          className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        >
          &gt;
        </Link>
      )}
    </div>
  )
}

export default Pagination
