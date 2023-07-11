import React from 'react'
import '../styles/Form.css'

const Form = () => {
  return (
    <>
        <section id='form'>
            <div className='form'>
                <div className='form__container'>
                    <div className='form__content'>
                        <h2>Free Fitness Quiz</h2>
                        <p className='errorMsg'>All fields required!</p>
                        <form>
                            <div className='form__cell'>
                                <label className='form__label'>
                                    Body Weight
                                </label>
                                <input type='number' placeholder='BW in lbs' required min='1' max='700' id='bw' />
                            </div>
                            <div className='form__cell'>
                                <label className='form__label'>
                                    Primary Goal
                                </label>
                                <select required>
                                    <option>Select Goal</option>
                                    <option>Build Muscle</option>
                                    <option>Lose Fat</option>
                                    <option>Get Stronger</option>
                                </select>
                            </div>
                            <div className='form__cell'>
                                <label className='form__label'>
                                    Fitness Level
                                </label>
                                <select required>
                                    <option>Select fitness level</option>
                                    <option>Beginner</option>
                                    <option>Intermediate</option>
                                    <option>Advanced</option>
                                </select>
                            </div>
                            <button type='button' className='form__btn'>Generate</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Form

// body weight, goal, current fitness level: muscle building, Cardio, powerlifting