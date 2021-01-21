import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

// import child component(s)
import ProductTile from './ProductTile';

// class TileSlider extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       selected: -1,
//     };
//   }

//   componentDidMount() {
//     this.setState({
//       selected: 1,
//     });
//   }

//   initPagination() {
//     let products = [...this.props.relatedProducts];
//     const pages = [].concat.apply(
//       [],
//       products.map((product, index) =>
//         index % 6 ? [] : [products.slice(index, index + 6)]
//       )
//     );

//     return pages;
//   }

//   pageSelect(event, pageIndex, pageCount) {
//     let url = "http://localhost:3000/#slide-";
//     if (window.location.hash.length) {
//       let currentHash = Math.abs(parseInt(window.location.href.slice(-2)));

//       if (currentHash < pageIndex * 6) {
//         if (pageIndex === pageCount) {
//           window.location.href = url + this.props.relatedProducts.length;
//         } else {
//           window.location.href = url + pageIndex * 6;
//         }
//       } else {
//         window.location.href = url + (pageIndex * 6 + 1 - 6);
//       }
//     } else {
//       if (pageIndex === pageCount) {
//         window.location.href = url + this.props.relatedProducts.length;
//       } else {
//         window.location.href = url + pageIndex * 6;
//       }
//     }
//   }

//   render() {
//     if (this.props.relatedProducts.length) {
//       return (
//         <div className="tile-slider-container">
//           <div className="image-slider-header">
//             <h2 className="slider-header">
//               Customers also bought these products
//             </h2>
//             <a id="slide-pagination-prev" href="#slide-1">
//               1
//             </a>
//             <a id="slide-pagination-next" href="#slide-12">
//               2
//             </a>
//           </div>
//           <div className="image-slider-contain">
//             <ul className="slider">
//               {this.props.relatedProducts.map((product, index) => (
//                 <ProductTile
//                   className="slide"
//                   index={index}
//                   product={product}
//                   // dataId={product.id}
//                   key={product.id}
//                 />
//               ))}
//             </ul>
//             {}
//           </div>
//           <div className="slide-pagination-bottom">
//             {this.pageSelect().map((page, index, pages) => (
//               <FontAwesomeIcon
//                 key={index}
//                 className={
//                   "pagination-circle-" + (this.state.selected == index + 1)
//                 }
//                 icon={faCircle}
//                 style={{ color: "red", cursor: "pointer" }}
//                 onClick={(e) => {
//                   pageSelect(e, index + 1, pages.length);
//                 }}
//               />
//             ))}
//           </div>
//         </div>
//       );

//     } else return null;
//   }
// }

const TileSlider = ({ relatedProducts, tileSlidePage, setSlidePage }) => {
  let products = [...relatedProducts];
  const pages = [].concat.apply([],
    products.map((product, index) =>
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

    setSlidePage(pageIndex);
  }



  return (
    <div className="tile-slider-container">
      <div className="image-slider-header">
        <h2 className="slider-header">Customers also bought these products</h2>
        <a id="slide-pagination-prev" href="#slide-1">
          1
        </a>
        <a id="slide-pagination-next" href="#slide-12">
          2
        </a>
      </div>
      <div className="image-slider-contain">
        <ul className="slider">
          {relatedProducts.map((product, index) => (
            <ProductTile
              className="slide"
              index={index}
              product={product}
              // dataId={product.id}
              key={product.id}
            />
          ))}
        </ul>
        {}
      </div>
      <div className="slide-pagination-bottom">
        {pages.map((page, index, pages) => (
          <span className="pagincation-icon">
            <FontAwesomeIcon
              key={index}
              className={'pagination-circle-' + (tileSlidePage == (index + 1))}
              icon={faCircle}
              onClick={(e) => {pageSelect(e, (index + 1), pages.length)}}
            />
          </span>
        ))}
      </div>
    </div>
  );
};

export default TileSlider;