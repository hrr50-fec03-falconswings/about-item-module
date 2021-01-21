import React from 'react';
import faker from 'faker';

import ProductReviews from './ProductReviews';

import photo from '../../../public/assets/images/test.jpg';


const ProductTile = ({ product, index }) => {
  return (
    <li className="slide" id={'slide-' + (index + 1)}>
      <div className="tile-image">
        <div className="tile-flag">
          <span id="reduced-flag">Reduced Price</span>
          {/* <span id={product.special + '-flag'}>{product.special}</span> */}
        </div>
        {/* <img src="http://placeimg.com/168/168/any" alt=""/> */}
        <img style={{maxHeight: '168.66px', maxWidth: '168.66px'}} src={photo} alt=""/>
      </div>
      <div className="tile-content">
        <div className="tile-content-label">{"Sponsored"}</div>
        <br/>
        <div className="tile-content-title">
          <p>hahah oh yea i ffasdfsjfaskld</p>
        </div>
        <ProductReviews
          reviewAvg={product.reviews_avg}
          reviewTotal={product.reviews_total}
        />
        <br/>
        <div className="tile-price">
          <p className="writing-black">{"$" + product.price}</p>
        </div>
      </div>
    </li>
  );
};

export default ProductTile;