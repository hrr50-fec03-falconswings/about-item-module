import React from 'react';
import faker from 'faker';

import ProductReviews from './ProductReviews';

import photo from '../../../public/assets/images/test.jpg';


const ProductTile = ({ product, index }) => {
  return (
    <li className="slide" id={'slide-' + (index + 1)}>
      <div className="tile-flag">Rollback</div>
      <div className="tile-image">
        {/* <img src="http://placeimg.com/168/168/any" alt=""/> */}
        <img style={{maxHeight: '168px', maxWidth: '168px'}} src={photo} alt=""/>
      </div>
      <div className="tile-content">
        <div className="tile-content-label">{"Sponsored"}</div>
        <br/>
        <div className="tile-content-title">
          <p>hahah oh yea i ffasdfsjfaskld</p>
        </div>
        <ProductReviews reviews={product.reviews_avg} />
        <br/>
        <div className="tile-price">
          <p className="writing-black">{"$" + product.price}</p>
        </div>
      </div>
    </li>
  );
};

export default ProductTile;