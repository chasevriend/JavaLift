import React, { useEffect, useState } from 'react'
import '../styles/Exercises.css'
import { exerciseOptions, FetchData } from '../utils/FetchData'

const Search = () => {
    const [search, setSearch] = useState('')
    const [exercises, setExercises] = useState([])
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
                (exercise) => exercise.name.toLowerCase().includes(search)
                || exercise.bodyPart.toLowerCase().includes(search)
                || exercise.target.toLowerCase().includes(search)
                || exercise.equipment.toLowerCase().includes(search)
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
                />
                <button className='search__btn' onClick={handleSearch}>Search</button>
            </div>
        </div>
    </>
  )
}

export default Search