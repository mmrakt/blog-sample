import React from 'react'
import { Link } from 'gatsby'

const Title: React.VFC = () => {
  const hoge = ''

  return (
    <div className="navbar-brand">
      <Link to="/" className="navbar-item" title="Logo">
        <h1 className="font-black text-4xl">EightTree Demo</h1>
      </Link>
    </div>
  )
}

export default Title
