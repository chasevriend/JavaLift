import React from 'react'
import '../styles/ScrollBar.css'

import DB from '../images/db.png';
import { Stack } from '@mui/system';

const Muscle = ({ item, muscle, setMuscle}) => {
  return (
    <div className='muscle'>
        <div 
            className='muscle__btn' 
            type='button' 
            style= {
            muscle === item ? {
                borderTop: '4px solid var(--bg)'
            } : {}
            }
            onClick={() => setMuscle(item)}
        >
            <img src={DB} alt='dumbbell' className='muscle__img' />
            <h3>{item}</h3>
        </div>
    </div>
  )
}

export default Muscle