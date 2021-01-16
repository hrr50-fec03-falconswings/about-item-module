import React from 'react';

const ProductDisclaimer = () => {
  return (
    <div className="product-info-disclaimer">
      <p>
        <span className="writing-bold">
          We aim to show you accurate product information. </span>
        <span>
          Manufacturers, suppliers and others provide what you see here, and have not verified it. </span>
        <a className="button-wrapper" href="">See our disclaimer</a>
      </p>
    </div>
  );
};

export default ProductDisclaimer;