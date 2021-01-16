import React from 'react';

const ProductInfo = ({ selectedProduct }) => {
  if (selectedProduct != undefined) {
    return(
      <div className="about-item-section">
        <h2>About This Item</h2>
        <p>{selectedProduct.details}</p>
        <h3>Specifications</h3>
        <div className="about-item-specifications">

        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default ProductInfo;