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

  let nextPage;
  let products = [...relatedProducts];
  const pages = [].concat.apply([], products.map((product, index) =>
    index % 6 ? [] : [products.slice(index, index + 6)]
  ));

  const pageScroll = (event, direction) => {
    const slider = document.getElementById('tile-slider');
    let offset = slider.scrollWidth % 1360;
    if (offset < 100) offset = 1360;

    if (direction == 'left') {
      nextPage = currentPage - 1;
      if (currentPage !== pages.length) {
        slider.scrollBy({
          left: -1360,
          behavior: 'smooth'
        })
      } else {
        console.log('here')
        slider.scrollBy({
          left: -offset,
          behavior: 'smooth'
        })
      }

    } else { // direction == 'right'
      nextPage = currentPage + 1;
    if (currentPage !== pages.length) {
      slider.scrollBy({
        left: 1360,
        behavior: 'smooth'
      })
    } else {
      slider.scrollTo({
        left: slider.scrollWidth,
        behavior: 'smooth'
      })
    }
  }

  setCurrentPage(nextPage);
}

const pageSelect = (event, pageIndex) => {
  const slider = document.getElementById('tile-slider')
  slider.scrollTo({
    left: 1360 * (pageIndex - 1),
    behavior: 'smooth'
  })

  setCurrentPage(pageIndex);
}

  return (
    <div id="tile-slider-container">
      <div id="tile-slider-header">
        <h2>Customers also bought these products</h2>
      </div>
      <div id="tile-slider">
        {relatedProducts.map((product, index) => (
          <ProductTile key={product.id} product={product} index={index} />
        ))}
      </div>

      <div className="slide-pagination-left">
        <img
          className={'hidden-' + (currentPage == 1)}
          src={pageLeft}
          alt="next page forward button"
          onClick={(e) => {pageScroll(e, 'left')}}  />
      </div>
      <div className="slide-pagination-right">
        <img
          className={'hidden-' + (currentPage == pages.length)}
          src={pageRight}
          alt="next page forward button"
          onClick={(e) => {pageScroll(e, 'right')}}  />
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