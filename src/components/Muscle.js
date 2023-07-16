import React from 'react'
import '../styles/ScrollBar.css'

import DB from '../images/db.png';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

const Muscle = ({ item, muscle, setMuscle}) => {
  return (
    <ScrollMenu>
        <div className='muscle'>
            <button className='muscle__btn' type='button' 
            style= {
                muscle === item ? {
                    borderTop: '4px solid var(--bg)'
                } : {}
            }>
                <img src={DB} alt='dumbbell' className='muscle__img' />
                <h3>{muscle}</h3>
            </button>
        </div>
    </ScrollMenu>
  )
}

export default Muscle