import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import ScrollTop from '../components/ScrollTop'

const Layout = () => {
  return (
    <>
    <ScrollTop/>
    <Header/>
    <main>
        <Outlet/>
    </main>
    <Newsletter/>
    <Footer/>
    </>
  )
}

export default Layout