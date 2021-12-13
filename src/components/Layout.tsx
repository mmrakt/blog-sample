import React from 'react'

import Footer from './Footer'
import Header from './Header'

const Layout: React.FC = ({ children }) => (
  <div className="dark:text-white">
    <Header />
    <main className="pc:py-10 py-6 dark:bg-dark-black bg-gray-100">
      {children}
    </main>
    <Footer />
  </div>
)

export default Layout
