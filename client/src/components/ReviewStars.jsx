import React from 'react';

// import css module
import s from '../styles/ReviewStars.css';

// import custom svg icons
import emptyStar from '../assets/icons/empty_star.svg';
import halfStar from '../assets/icons/half_star.svg';
import fullStar from '../assets/icons/full_star.svg';

const ReviewStars = ({ reviewAvg, reviewTotal }) => {
  const initStars = () => {
    let totalStars = [];
    for (let i = Math.floor(reviewAvg); i > 0; i--) {
      totalStars.push(1);
    }
    if (reviewAvg % 2 !== 0) {
      if (reviewAvg % 1 < 0.3) {
        totalStars.push(0)
      } else if (reviewAvg % 1 > 0.95) {
        totalStars.push(1)
      } else {
        totalStars.push(.5);
      }
    }
    while (totalStars.length < 5) {
      totalStars.push(0);
    }

    return totalStars;
  }

  return (
    <div className="tile-content-reviews">
      {initStars().map((star, index) => {
        if (star === 1) {
          return (
            <img className="review-star" src={fullStar} alt="a full star" key={index} />
          )
        } else if (star === .5) {
          return (
            <img className="review-star" src={halfStar} alt="a half-full star" key={index} />
          )
        } else {
          return (
            <img className="review-star" src={emptyStar} alt="an empty star" key={index} />
          )
        }
      })}
      <div className="tile-content-reviews-total">
        <p>{reviewTotal}</p>
      </div>
    </div>
  );
};

export default ReviewStars;