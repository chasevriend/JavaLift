import React from 'react';
import '../styles/Programs.css';

const Programs = () => {
  return (
    <>
        <section id='programs' className='progs'>
            <div className='progs__header'>
                <h2>Our Training Programs</h2>
                <p>3 customizable programs provided from the JavaLift technology.</p>
            </div>
            <div className='progs__container'>
                <div className='prog'>
                    <h1>💪</h1>
                    <h3>Muscle Building</h3>
                    <p>Increase your muscle mass through Mike Mentzer's bodybuilding idealogies.</p>
                    <h5>Learn More</h5>
                </div>
                <div className='prog'>
                    <h1>🏃</h1>
                    <h3>Fat Loss</h3>
                    <p>Increase your endurance and physical strength by combining cardio and weightlifting.</p>
                    <h5>Learn More</h5>
                </div>
                <div className='prog'>
                    <h1>🏋️‍♂️</h1>
                    <h3>Powerlifting</h3>
                    <p>Increase your strength and muscularity by pushing your strength limits.</p>
                    <h5>Learn More</h5>
                </div>
            </div>
        </section>
    </>
  )
}

export default Programs