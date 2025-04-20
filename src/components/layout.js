import React from 'react'
import Navbar from './sections/navbar/default'
import Cards from './sections/main/Cards'
import Footer from './sections/footer/page'

const Layout = ({children}) => {
  return (
    <div>
        <Navbar />
        {children}
    </div>
  )
}

export default Layout