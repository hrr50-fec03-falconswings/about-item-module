import React from 'react';

// import css module
import s from '../styles/ProductInfo.css';

// import child component(s)
import ProductSpecs from './ProductSpecs';

const ProductInfo = ({ selectedProduct, relatedProducts }) => {
  if (selectedProduct != undefined) {
    return(
      <div className="product-info-container">
        <h2>About This Item</h2>
        <div className="product-info-disclaimer">
          <p>
            <span className="writing-bold">
              We aim to show you accurate product information. </span>
            <span>
              Manufacturers, suppliers and others provide what you see here, and have not verified it. </span>
            <a className="disclaimer-button-wrapper" href="">See our disclaimer</a>
          </p>
        </div>
        <p className="product-info-details">{selectedProduct.details}</p>
        <ProductSpecs selectedProduct={selectedProduct} />
      </div>
    );
  } else return null;
};

export default ProductInfo;