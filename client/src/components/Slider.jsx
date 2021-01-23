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
import ProdTile from './ProdTile';

const Slider = ({ relatedProducts, currentPage, setCurrentPage }) => {

  let products = [...relatedProducts];
  const pages = [].concat.apply([], products.map((product, index) =>
    index % 6 ? [] : [products.slice(index, index + 6)]
  ));

  const pageScroll = (event, direction) => {
    const slider = document.getElementById('tile-slider');
    let nextPage;

    console.log(currentPage, pages.length, direction)

    if (direction == 'left') {
      nextPage = currentPage - 1;
      if (currentPage !== pages.length) {
        slider.scrollBy({
          left: -1360,
          behavior: 'smooth'
        })
      } else {
        console.log('here')
        slider.scrollTo({
          left: 0,
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

const pageSelect = (event, pageIndex, direction) => {
  let url = 'http://localhost:3000/#slide-';
  const slider = document.getElementById('tile-slider')
  console.log(slider.scrollWidth)

    console.log(pageIndex, pages.length)
    if (pageIndex === pages.length) {
      let val = slider.scrollWidth % 1360;
      console.log(val);
      slider.scrollBy({
        right: val,
        behavior: 'smooth'
      })
    }
    slider.scrollBy({
      left: 1360,
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
          <ProdTile key={product.id} product={product} index={index} />
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

export default Slider;