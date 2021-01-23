import React from 'react';

// import css module
import s from '../styles/TileSlider.css';

// import external font library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

// import custom assets
import pageLeft from '../assets/icons/page_left.svg';
import pageRight from '../assets/icons/page_right.svg';

// import child component(s)
import ProductTile from './ProductTile';

const TileSlider = ({ relatedProducts, currentPage, setCurrentPage }) => {
  let products = [...relatedProducts];
  const pages = [].concat.apply([], products.map((product, index) =>
    index % 6 ? [] : [products.slice(index, index + 6)]
  ));

  const pageSelect = (event, pageIndex, pageCount) => {
    let url = 'http://localhost:3000/#slide-';

    if (window.location.hash.length) {
      let currentHash = Math.abs(parseInt(window.location.href.slice(-2)));

      if (currentHash < (pageIndex * 6)) {
        if (pageIndex === pageCount) {
          window.location.href = url + relatedProducts.length;
        } else {
          window.location.href = url + (pageIndex * 6);
        }
      } else {
        window.location.href = url + (((pageIndex * 6) + 1) - 6);
      }
    } else {
      if (pageIndex === pageCount) {
        window.location.href = url + relatedProducts.length;
      } else {
        window.location.href = url + (pageIndex * 6);
      }
    }

    setCurrentPage(pageIndex);
  }

  return (
    <div className="tile-slider-container">
      <div className="image-slider-header">
        <h2 className="slider-header">Customers also bought these products</h2>
      </div>
      <div className="image-slider-contain">
        <ul className="slider">
          {relatedProducts.map((product, index) => (
            <ProductTile
              key={product.id}
              className="slide"
              index={index}
              product={product}
            />
          ))}
        </ul>
      </div>
      <div className="slide-pagination-left">
        <img
          className={'hidden-' + (currentPage == 1)}
          src={pageLeft}
          alt="next page forward button"
          onClick={(e) => {pageSelect(e, (currentPage - 1), pages.length)}}  />
      </div>
      <div className="slide-pagination-right">
        <img
          className={'hidden-' + (currentPage == pages.length)}
          src={pageRight}
          alt="next page forward button"
          onClick={(e) => {pageSelect(e, (currentPage + 1), pages.length)}}  />
      </div>
      <div className="slide-pagination-bottom">
        {pages.map((page, index, pages) => (
          <FontAwesomeIcon
            key={index}
            className={'pagination-circle-' + (currentPage == (index + 1))}
            icon={faCircle}
            onClick={(e) => {pageSelect(e, (index + 1), pages.length)}}
          />
        ))}
      </div>
    </div>
  );
};

export default TileSlider;