import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbars/Navbar'
import Footer from '../components/footers/Footer'


function Layout() {
  return (
<>
<Navbar />
<Outlet />
<Footer />
</>
  )
}

export default Layout