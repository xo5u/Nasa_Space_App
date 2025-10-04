import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbars/Navbar'
import Footer from '../components/footers/Footer'


function Layout() {
  return (
<>
<div className=' bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950  text-white '>
<Navbar />
<Outlet />
<Footer />
</div>

</>
  )
}

export default Layout