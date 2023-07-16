import React, { useState } from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Search from '../components/Search'
import Exercises from '../components/Exercises'

const LibraryPg = () => {
  const [exercises, setExercises] = useState([])
  const [muscle, setMuscle] = useState('all')

  return (
    <>
      <Nav />
      <Search 
        setExercises={setExercises} 
        muscle={muscle} 
        setMuscle={setMuscle} 
      />
      <Exercises
        setExercises={setExercises} 
        muscle={muscle} 
        setMuscle={setMuscle} 
      />
      <Footer />
    </>
  )
}

export default LibraryPg