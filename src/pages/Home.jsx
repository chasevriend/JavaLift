import React from 'react'
import About from '../components/About'
import Footer from '../components/Footer'
import Form from '../components/Form'
import Hero from '../components/Hero'
import Nav from '../components/Nav'
import Pricing from '../components/Pricing'
import Programs from '../components/Programs'

const Home = () => {
  return (
    <div>
        <Nav />
        <Hero />
        <Form />
        <Programs />
        <About />
        <Pricing />
        <Footer />
        
    </div>
  )
}

export default Home;