import React from 'react';
import faker from 'faker';

// import css module
import s from '../styles/ProductTile.css';

// import child component(s)
import ReviewStars from './ReviewStars';


const ProdTile = ({ product, index, setProductAndCategory }) => {
  const rand = () => Math.random();
  if (product) {
    let specialText = '';
    let deliveryText = '';
    if (product.special == 'reduced') { specialText = 'Reduced Price' }
    if (product.special == 'lowstock') { specialText = 'Low Stock' }
    if (product.special == 'newitem') { specialText = 'New Item' }
    if (product.special == 'rollback') { specialText = 'Rollback' }
    if (product.delivery == 'twoday') { deliveryText = '2-day delivery' }
    if (product.delivery == 'nextday') { deliveryText = '' }
    return (
      <div className="tile-slide">
        <a onClick={(e) => { setProductAndCategory(e, product.id) }} >
          <div className="tile-image">
            <div className="tile-flag">
              {(specialText.length > 0) && <span className={product.special + '-flag'}>{specialText}</span>}
            </div>
            <img className="product-image" src={product.images[0]} alt="random product image"/>
          </div>
          <div className="tile-content">
            <div className="tile-content-label">
              {(product.sponsored == 1)
                ? "Sponsored"
                : <div className="display-blank"></div> }
            </div>
            <div className="display-blank"></div>
            <div className="tile-content-title">
              {product.name}
            </div>
            <ReviewStars
              reviewAvg={product.reviews_avg}
              reviewTotal={product.reviews_total}
            />
            <div className="display-blank"></div>
            <div className="tile-price">
              <span className="price-black">{"$" + product.price}</span>
              {(product.special == 'reduced')
                ? <span className="price-grey">
                    {"List $"}<del>{((parseInt(product.price) + 30).toString() + ".00")}</del>
                  </span>
                : (product.item_bundle == 1)
                ? <span className="price-grey">{"$" + product.price + "  /  each"}</span>
                : <span className="price-grey"></span>
              }
            </div>
            <div className="tile-shipping-info">
              {(product.delivery == 'twoday')
                ? <div className="display-blank">{deliveryText}</ div>
                : (product.delivery == 'nextday')
                ? <div className="nextday-shipping">{deliveryText}</div>
                : <div className="display-blank"></div>
              }
            </div>
          </div>
        </a>
      </div>
    );
  } else return null;
};

export default ProdTile;