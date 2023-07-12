import React from 'react'
import '../styles/About.css';
import AboutImg from '../images/hero3.png';

const About = () => {
  return (
    <>
        <section id='about'>
            <div className='about'>
                <h2>Why Us?</h2>
                <div className='about__container'>
                    <img src={AboutImg} alt='fit person' className='about__img' />
                    <div className='about__content'>
                        <span>
                            <p className='about__num'>1</p>
                            <p>Comprehensive Exercise Library</p>
                        </span>
                        <span>
                            <p className='about__num'>2</p>
                            <p>Customized Workout Plans</p>
                        </span>
                        <span>
                            <p className='about__num'>3</p>
                            <p>Interactive & Engaging Interface</p>
                        </span>
                        <span>
                            <p className='about__num'>4</p>
                            <p>Progress Tracking & Analytics</p>
                        </span>
                        <span>
                            <p className='about__num'>5</p>
                            <p>Educational Content & Resources</p>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About