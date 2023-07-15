import React from 'react'
import '../styles/Exercises.css'

const Search = () => {
  return (
    <>
        <div className='search'>
            <h1 className='search__header'>Exercise Library</h1>
            <div className='search__container'>
                <input type='text' placeholder='Search Exercises' className='search__input' />
                <button className='search__btn'>Search Library</button>
            </div>
        </div>
    </>
  )
}

export default Search