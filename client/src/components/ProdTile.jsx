import React from 'react';
import faker from 'faker';

// import css module
import s from '../styles/ProdTile.css';

// import child component(s)
import ProductReviews from './ProductReviews';


const ProdTile = ({ product, index }) => {
  return (
    <div className="tile-slide">
      <div className="tile-image">
        <div className="tile-flag">
          <span id="reduced-flag">Reduced Price</span>
          {/* <span id={product.special + '-flag'}>{product.special}</span> */}
        </div>
        {/* <img src={"https://hrr50-fec-images.s3-us-west-1.amazonaws.com/images/img_" + (index + 1) + ".jpeg"} alt="" style={{maxHeight: '168.66px', maxWidth: '168.66px'}} /> */}
        <img src="http://placeimg.com/640/480/videogames" alt="" style={{maxHeight: '168.66px', maxWidth: '168.66px'}} />
        {/* <img style={{maxHeight: '168.66px', maxWidth: '168.66px'}} src={photo} alt=""/> */}
        {/* <img style={{maxHeight: '168.66px', maxWidth: '168.66px'}} src={product.images[0]} alt=""/> */}
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
    </div>
  );
};

export default ProdTile;