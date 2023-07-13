import React, { useState } from 'react';
import '../styles/Reviews.css'
import ReviewsContainer from './ReviewsContainer';

const Reviews = () => {
  const dismissReview = (id) => {
    setReviews(reviews.filter((review) => review.id !== id));
  };

  const [reviews, setReviews] = useState([
    { id: 1, text: 'Review 1' },
    { id: 2, text: 'Review 2' },
    { id: 3, text: 'Review 3' },
    // Add more review objects as needed
  ]);

  return (
    <>
      <section id='reviews' className='reviews'>
        <div className='reviews__container'>
          <div className='reviews__content'>
            <h2>What Our Members Think of JavaLift</h2>
            <p>Here are various testimonials from some of our members spread all over the world</p>
            {/* profile pics in order of review's profile pics */}
            <p>444 reviews</p>
            <span>
              <h3 className='reviews__btn' onClick={dismissReview} >&larr;</h3>
              <h3 className='reviews__btn' onClick={dismissReview} >&#8594;</h3>
            </span>
          </div>
          <div className='reviews__cards'>
            <ReviewsContainer />
          </div>
        </div>
      </section>
    </>
  )
}

export default Reviews