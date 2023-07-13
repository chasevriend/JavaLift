import React from 'react'
import About from '../components/About'
import Footer from '../components/Footer'
import Form from '../components/Form'
import Hero from '../components/Hero'
import Nav from '../components/Nav'
import Programs from '../components/Programs'
import Reviews from '../components/Reviews'

const Home = () => {
  return (
    <div>
        <Nav />
        <Hero />
        <Form />
        <Programs />
        <About />
        <Reviews /> 
        {/* Pricing  */}
        <Footer />
        
    </div>
  )
}

export default Home;