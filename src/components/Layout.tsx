import React, { ReactElement } from 'react'

import Footer from './Footer'
import Header from './Header'

const Layout: React.FC<{ children: ReactElement[] }> = ({ children }) => (
  <div className="dark:text-white">
    <Header />
    <main className="min-h-[53rem] pc:py-10 py-6 dark:bg-dark-black bg-gray-100">
      {children}
    </main>
    <Footer />
  </div>
)

export default Layout
