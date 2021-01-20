import React from 'react';
import faker from 'faker';

// import custom svg icons
import emptyStar from '../../../public/assets/icons/empty_star.svg';
import halfStar from '../../../public/assets/icons/half_star.svg';
import fullStar from '../../../public/assets/icons/full_star.svg';


// import child component(s)
import ProductTile from './ProductTile';

const TileSlider = () => {
  let count = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
  return (
    <div className="image-slider-contain">
      <div className="image-slider-header">
        <h2 className="slider-header">Customers also bought these products</h2>
      </div>
      <ul className="slider">
        <a href="#slide-1">1</a>
        <a href="#slide-8">2</a>
        {count.map((item, index) => (
          <li className="slide" id={'slide-' + (index + 1)}>
            <div className="tile-flag">Rollback</div>
            <div className="tile-image">
              <img src="http://placeimg.com/168/168/any" alt=""/>
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
        ))}
      </ul>
    </div>
  );
};

export default TileSlider;