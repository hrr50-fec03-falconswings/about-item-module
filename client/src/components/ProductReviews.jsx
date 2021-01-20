import React from 'react';

// import custom svg icons
import emptyStar from '../../../public/assets/icons/empty_star.svg';
import halfStar from '../../../public/assets/icons/half_star.svg';
import fullStar from '../../../public/assets/icons/full_star.svg';

const ProductReviews = ({ product }) => {
  let totalStars = [];
  let reviews = product.reviews_avg;
  for (let i = Math.floor(reviews); i > 0; i--) {
    totalStars.push(1);
  }
  if (reviews % 2 !== 0) totalStars.push(.5);
  while (totalStars.length < 5) {
    totalStars.push(0);
  }

  console.log(totalStars);
  return (
    <div className="tile-content-reviews">
      <img src={fullStar} alt="" style={{height: '11px'}} />
      <img src={fullStar} alt="" style={{height: '11px'}} />
      <img src={fullStar} alt="" style={{height: '11px'}} />
      <img src={halfStar} alt="" style={{height: '11px'}} />
      <img src={emptyStar} alt="" style={{height: '11px'}} />
    </div>
  );
};

export default ProductReviews;