import React, { useState } from 'react'
import '../styles/Exercises.css'

const Search = () => {
    const [search, setSearch] = useState('')

    const handleSearch = async () => {
        if(search) {
            const exercisesData = await fetchData()
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