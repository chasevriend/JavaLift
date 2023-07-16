import React, { useEffect, useState } from 'react'

import '../styles/Exercises.css'

import { exerciseOptions, FetchData } from '../utils/FetchData'
import ScrollBar from './ScrollBar'
import Muscle from './Muscle'

const Search = ({ setExercises, muscle, setMuscle }) => {
    const [search, setSearch] = useState('')
    const [muscles, setMuscles] = useState([])

    useEffect(() => {
        const fetchExerciseData = async () => {
            const muscleData = await 
            FetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)

            setMuscles(['all', ...muscleData])
        }

        fetchExerciseData()
    }, [])

    const handleSearch = async () => {
        if(search) {
            const exercisesData = await 
            FetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

            const searchedExercises = exercisesData.filter(
                (item) => item.name.toLowerCase().includes(search)
                || item.bodyPart.toLowerCase().includes(search)
                || item.target.toLowerCase().includes(search)
                || item.equipment.toLowerCase().includes(search)
            );

            setSearch('');
            setExercises(searchedExercises);
        }
    }
    
    return (
    <>
        <div className='search'>
            <h1 className='search__header'>Exercise Library</h1>
            <div className='search__container'>
                <input 
                    type='text' 
                    placeholder='Search Exercises' 
                    className='search__input'
                    onChange={(e) => setSearch(e.target.value.toLowerCase())} 
                    value={search}
                />
                <button className='search__btn' onClick={handleSearch}>Search</button>
            </div>
            <div className='muscles__container'>
                <ScrollBar data={muscles} muscle={muscle} setMuscle={setMuscle} />
            </div>
        </div>
    </>
  )
}

export default Search