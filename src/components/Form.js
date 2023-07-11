import React from 'react'
import '../styles/Form.css'

const Form = () => {
  return (
    <>
        <section id='form'>
            <div className='form'>
                <div className='form__container'>
                    <div className='form__content'>
                        <h2>Free Program Quiz</h2>
                        <p className='errorMsg'>All fields required!</p>
                        <form>
                            <div className='form__cell'>
                                <label className='form__label'>
                                    What is your current Body-Weight?
                                </label>
                                <input type='number' required min='1' max='700' id='bw' />
                            </div>
                            <div className='form__cell'>
                                <label className='form__label'>
                                    What is your goal?
                                </label>
                                <select>
                                    <option>Select Goal</option>
                                    <option>Build Muscle</option>
                                    <option>Lose Fat</option>
                                    <option>Get Stronger</option>
                                </select>
                            </div>
                            <div className='form__cell'>
                                <label className='form__label'>
                                    What is your current fitness level?
                                </label>
                                <select>
                                    <option>Select fitness level</option>
                                    <option>Beginner</option>
                                    <option>Intermediate</option>
                                    <option>Advanced</option>
                                </select>
                            </div>
                            <button type='button' className='form__btn'>Generate Program</button>
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