import React from 'react';
import faker from 'faker';

// import css module
import s from '../styles/ProductTile.css';

// import child component(s)
import ReviewStars from './ReviewStars';


const ProdTile = ({ product, index }) => {
  if (product) {
    let specialText = ''
    if (product.special == 'reduced') { specialText = 'Reduced Price' }
    if (product.special == 'lowstock') { specialText = 'Low Stock' }
    if (product.special == 'newitem') { specialText = 'New Item' }
    if (product.special == 'rollback') { specialText = 'Rollback' }
    return (
      <div className="tile-slide">
        <div className="tile-image">
          <div className="tile-flag">
            {(specialText.length > 0) && <span className={product.special + '-flag'}>{specialText}</span>}
          </div>
          <img className="product-image" src={product.images[0]} alt="random product image"/>
          {/* <img src="http://placeimg.com/640/480/videogames" alt="" style={{maxHeight: '168.66px', maxWidth: '168.66px'}} /> */}
        </div>
        <div className="tile-content">
          <div className="tile-content-label">
            {(product.sponsored == 1)
              ? "Sponsored"
              : <div className="display-blank"></div> }
          </div>
          <br/>
          <div className="tile-content-title">
            {product.name}
          </div>
          <ReviewStars
            reviewAvg={product.reviews_avg}
            reviewTotal={product.reviews_total}
          />
          <br/>
          <div className="tile-price">
            <span className="price-black">{"$" + product.price}</span>
            <span className="price-grey">{"$" + product.price + "  /  each"}</span>
          </div>
        </div>
      </div>
    );
  }
};

export default ProdTile;