import React from 'react';
import '../styles/Pricing.css';

const Pricing = () => {
  return (
    <>
        <section id='pricing' className='pricing'>
            <div className='pricing__header'>
                <h2>Membership Plans</h2>
                <p>
                    JavaLift offers competitive pricing options for its services ensuring you can choose a plan 
                    that fits your budget and provides excellent value.
                </p>
            </div>
            <div className='pricing__container'>
                <div className='pricing__cell'>
                    <p className='pricing__head'>Basic Plan</p>
                    <span className='price'>
                        <h3>FREE</h3>
                        <p>per month</p>
                    </span>
                    <hr></hr>
                    <ul>
                        <li>
                            <span className='check'>&#10003;</span>
                            1 Training program
                        </li>
                        <li>
                            <span className='check'>&#10003;</span>
                            Free fitness consultation
                        </li>
                        <li>
                            <span className='check'>&#10003;</span>
                            Tracking PR's progression
                        </li>
                        <li>
                            <span className='check'>&#10003;</span>
                            Tracking Bodyweight's progression
                        </li>
                    </ul>
                </div>
                <div className='pricing__cell'>
                    <p className='pricing__head'>Elite Plan</p>
                    <span className='price'>
                        <h3>$8.99</h3>
                        <p>per month</p>
                    </span>
                    <hr></hr>
                    <ul>
                        <li>
                            <span className='check'>&#10003;</span>
                            2 training programs
                        </li>
                        <li>
                            <span className='check'>&#10003;</span>
                            Free fitness consultation
                        </li>
                        <li>
                            <span className='check'>&#10003;</span>
                            Tracking PR's progression
                        </li>
                        <li>
                            <span className='check'>&#10003;</span>
                            Tracking Bodyweight's progression
                        </li>
                        <li>
                            <span className='check'>&#10003;</span>
                            24 Hour contactable trainers
                        </li>
                    </ul>
                </div>
                <div className='pricing__cell'>
                    <p className='pricing__head'>Premier Plan</p>
                    <span className='price'>
                        <h3>$12.99</h3>
                        <p>per month</p>
                    </span>
                    <hr></hr>
                    <ul>
                        <li>
                            <span className='check'>&#10003;</span>
                            5 training programs
                        </li>
                        <li>
                            <span className='check'>&#10003;</span>
                            Free fitness consultation
                        </li>
                        <li>
                            <span className='check'>&#10003;</span>
                            Tracking PR's progression
                        </li>
                        <li>
                            <span className='check'>&#10003;</span>
                            Tracking Bodyweight's progression
                        </li>
                        <li>
                            <span className='check'>&#10003;</span>
                            24 hour online personal trainers
                        </li>
                        <li>
                            <span className='check'>&#10003;</span>
                            Customizable Programs
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </>
  )
}

export default Pricing