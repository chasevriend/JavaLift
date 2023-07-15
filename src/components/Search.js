import React, { useState } from 'react'
import '../styles/Exercises.css'
import { exerciseOptions, FetchData } from '../utils/FetchData'

const Search = () => {
    const [search, setSearch] = useState('')

    const handleSearch = async () => {
        if(search) {
            const exercisesData = await 
            FetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

            console.log(exercisesData)
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