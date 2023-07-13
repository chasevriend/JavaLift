import React from 'react';
import '../styles/Reviews.css';

const Reviews = () => {
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
              <h3 className='reviews__btn'>&larr;</h3>
              <h3 className='reviews__btn'>&#8594;</h3>
            </span>
          </div>
          <div className='reviews__cards'>
            
          </div>
        </div>
      </section>
    </>
  )
}

export default Reviews