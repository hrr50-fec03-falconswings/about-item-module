import React from 'react';

// import css module
import s from '../styles/Slider.css';

// import external font library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

// import custom assets
import pageLeft from '../assets/icons/page_left.svg';
import pageRight from '../assets/icons/page_right.svg';

// import child component(s)
import ProductTile from './ProductTile';

const Slider = ({ relatedProducts, currentPage, setCurrentPage }) => {

  return (
    <div id="tile-slider-container">
      <div className="tile-slider-header">
        <h2>Customers also bought these products</h2>
      </div>
      <div className="tile-top-content">

      </div>
      <div className="tile-bottom-content"></div>
    </div>
  );
};

export default Slider;