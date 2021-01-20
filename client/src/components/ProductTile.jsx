import React from 'react';
import faker from 'faker';

import photo from '../../../public/assets/images/test.jpg';

// import custom svg icons
import emptyStar from '../../../public/assets/icons/empty_star.svg';
import halfStar from '../../../public/assets/icons/half_star.svg';
import fullStar from '../../../public/assets/icons/full_star.svg';

const ProductTile = ({ index }) => {
  return (
    <li className="slide" id={'slide-' + (index + 1)}>
      <div className="tile-flag">Rollback</div>
      <div className="tile-image">
        <img src="http://placeimg.com/168/168/any" alt=""/>
        {/* <img style={{maxHeight: '168px', maxWidth: '168px'}} src={photo} alt=""/> */}
      </div>
      <div className="tile-content">
        <div className="tile-content-label">{"Sponsored"}</div>
        <br/>
        <div className="tile-content-title">
          <p>hahah oh yea i ffasdfsjfaskld</p>
        </div>
        <div className="tile-content-reviews">
          <img src={fullStar} alt="" style={{height: '11px'}} />
          <img src={fullStar} alt="" style={{height: '11px'}} />
          <img src={fullStar} alt="" style={{height: '11px'}} />
          <img src={halfStar} alt="" style={{height: '11px'}} />
          <img src={emptyStar} alt="" style={{height: '11px'}} />
        </div>
        <br/>
        <div className="tile-price">
          <p className="writing-black">{"$" + faker.commerce.price()}</p>
        </div>
      </div>
    </li>
  );
};

export default ProductTile;