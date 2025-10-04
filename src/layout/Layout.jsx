import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbars/Navbar'
import Footer from '../components/footers/Footer'


function Layout() {
  return (
<>
<div className='bg-cyan-900 text-white p-4'>
<Navbar />
<Outlet />
<Footer />
</div>

</>
  )
}

export default Layout