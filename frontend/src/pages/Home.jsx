import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import  Features  from '../components/Features'
import Testmonials from '../components/Testmonials'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Testmonials />
      <Footer />
    </div>
  )
}

export default Home
