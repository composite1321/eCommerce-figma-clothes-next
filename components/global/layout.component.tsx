import React from 'react'
import Nav from './nav.component'
import Footer from './footer.component'

const Layout:React.FC<{ children:React.ReactNode }> = ({children}) => {
  return (
    <div className='page'>
      <Nav />
      {children}
      <Footer />
    </div>
  )
}

export default Layout