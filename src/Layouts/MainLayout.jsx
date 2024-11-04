import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

export default function MainLayout() {
  return (
    <div>
        {/* Navbar */}
        <Navbar></Navbar>

        <div className='min-h-[calc(100vh-232px)]'>{/* Dynamic Section */}</div>

        {/* Footer */}
        <Footer></Footer>
    </div>
  )
}
