// Code MovieReviews Here
import React from 'react'

const Review = ({
  headline,
  summary
}) => {
  return (
    <div className="review">
      <h2>{headline}</h2>
      <p>{summary}</p>
    </div>
  );
};

const MovieReviews = ({reviews}) => <div className="review-list">{reviews.map(Review)}</div>

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews