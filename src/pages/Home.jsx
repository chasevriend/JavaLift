import React from 'react'
import About from '../components/About'
import Form from '../components/Form'
import Hero from '../components/Hero'
import Nav from '../components/Nav'
import Programs from '../components/Programs'

const Home = () => {
  return (
    <div>
        <Nav />
        <Hero />
        <Form />
        <Programs />
        <About />
        {/* 

        About us 

        Reviews

        Pricing

        Call to Action

        Footer */}
    </div>
  )
}

export default Home