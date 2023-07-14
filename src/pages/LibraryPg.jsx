import React, { useState } from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

const LibraryPg = () => {

    return (
    <div>
        <Nav />
        <SearchExercises />
        <Exercises />
        <Footer />
    </div>
  )
}

export default LibraryPg;