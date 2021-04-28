import React from 'react'

// type IProps = {
//   title: string
// }
export const MiddleHeading = ({ title }: { title: string }) => (
  <div className="text-2xl mt-10 bg-blue-200 h-12 flex items-center justify-center">
    {title}
  </div>
)

export default MiddleHeading
