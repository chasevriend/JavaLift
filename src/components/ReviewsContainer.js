import React, {useState} from 'react'
import '../styles/Reviews.css';
import ReviewCard from './ReviewCard';

const ReviewsContainer = () => {
    const [reviews, setReviews] = useState([
      { id: 1, text: 'Review 1' },
      { id: 2, text: 'Review 2' },
      { id: 3, text: 'Review 3' },
      // Add more review objects as needed
    ]);
  
    return (
      <div className="reviews-container">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    );
  };
  
  export default ReviewsContainer;