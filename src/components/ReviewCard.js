import React from 'react';
import '../styles/Reviews.css'

const ReviewCard = ({ review }) => {
  return (
    <div className='review__card'>
      <span>
        <p className='quotation'>Quottation</p>
        <p className='stars'>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</p>
      </span> 
      <p>{review.text}</p>
      <div className='card__profile'>
        <img src={review.img} className='review__img' alt='profile picture' />
        <p className='card__name'>{review.name}</p>
        <p>{review.age}</p>
      </div>
    </div>
  )
}

export default ReviewCard;