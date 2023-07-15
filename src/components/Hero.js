import React from 'react';
import '../styles/Hero.css'
import { Link } from 'react-router-dom';
import HeroImg from '../images/hero.png'

const Hero = () => {
  return (
    <>
        <div className='hero'>
            <div className='hero__container'>
                <div className='hero__content'>
                    <h1>Build and Deploy Your Dream Body</h1>
                    <p>With our programs and exercise library, your dream body is just a commit away.</p>
                    <div className='hero__btns'>
                        <Link to='/LibraryPg' className='heroBtn__program'>
                            View Exercises
                        </Link>
                    </div>
                </div>
                <img src={HeroImg} alt='' className='hero__img' />
            </div>
        </div>
    </>
  )
}

export default Hero