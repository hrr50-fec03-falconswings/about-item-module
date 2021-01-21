import React from 'react';

// import custom svg icons
import emptyStar from '../../../public/assets/icons/empty_star.svg';
import halfStar from '../../../public/assets/icons/half_star.svg';
import fullStar from '../../../public/assets/icons/full_star.svg';

const ProductReviews = ({ reviewAvg, reviewTotal }) => {
  const initStars = () => {
    let totalStars = [];
    for (let i = Math.floor(reviewAvg); i > 0; i--) {
      totalStars.push(1);
    }
    // if (1 - Math.abs(reviewAvg % 2) < .1) console.log(reviewAvg);
    if (reviewAvg % 2 !== 0) totalStars.push(.5);
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
            <img src={fullStar} alt="a full star" style={{height: '11px'}} key={index} />
          )
        } else if (star === .5) {
          return (
            <img src={halfStar} alt="a half-full star" style={{height: '11px'}} key={index} />
          )
        } else {
          return (
            <img src={emptyStar} alt="an empty star" style={{height: '11px'}} key={index} />
          )
        }
      })}
      <div className="tile-content-reviews-total">
        <a href="">{reviewTotal}</a>
      </div>
    </div>
  );
};

export default ProductReviews;