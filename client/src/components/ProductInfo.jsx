import React from 'react';

const ProductInfo = ({ selectedProduct }) => {
  if (selectedProduct != undefined) {
    return(
      <div className="product-info-container">
        <h2 className="info-header">About This Item</h2>
        <p>{selectedProduct.details}</p>
        <h3>Specifications</h3>
        <div className="product-info-specifications">

        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default ProductInfo;