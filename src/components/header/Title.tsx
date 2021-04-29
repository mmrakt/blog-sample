import React from 'react'
import { Link } from 'gatsby'

const Title: React.VFC = () => {
  const hoge = ''

  return (
    <div className="navbar-brand mt-5">
      <Link to="/" className="navbar-item" title="Logo">
        <h1 className="font-black text-4xl mt-3">EightTree Demo</h1>
      </Link>
    </div>
  )
}

export default Title
