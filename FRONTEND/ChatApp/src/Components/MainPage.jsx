import React from 'react'
import Navbar from '../Views/Navbar'
import Footer from '../Views/Footer'
import { Outlet } from 'react-router-dom'

const MainPage = () => {


  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: '96px' }}>
          <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default MainPage;