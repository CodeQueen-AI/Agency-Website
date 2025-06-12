import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Acheive from './components/Acheive'
import About from './components/About'
import Service from './components/Service'
import Price from './components/Pricing'
import Footer from './components/Footer'
const page = () => {
  return (
    <div className='bg-gradient-to-l from-[#2A004E] via-black to-[#2A004E]'>
      <Navbar/>
      <Home/>
      <Acheive/>
      <About/>
      <Service/>
      <Price/>
      <Footer/>
    </div>
  )
}

export default page




