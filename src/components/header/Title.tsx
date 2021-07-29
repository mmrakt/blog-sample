import React from 'react'
import { Link } from 'gatsby'

const Title: React.VFC = () => (
  <div className="navbar-brand">
    <h1 className="font-black text-xl">
      <Link to="/" className="navbar-item p-4" title="Logo">
        Blog Sample
      </Link>
    </h1>
  </div>
)

export default Title
