import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

const Layout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>

        <ToastContainer/>
    </div>
  )
}

export default Layout