import React from 'react'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout