import React from 'react';

// import child component(s)
import ProductSpec from './ProductSpec';
import ProductDisclaimer from './ProductDisclaimer';

const ProductInfo = ({ selectedProduct }) => {
  if (selectedProduct != undefined) {
    let parsed = selectedProduct.specifications;
    console.log(parsed)
    return(
      <div className="product-info-container">
        <h2>About This Item</h2>
        <div className="product-info-disclaimer">
          <p>
            <span className="writing-bold">We aim to show you accurate product information. </span>
            <span>
            Manufacturers, suppliers and others provide what you see here, and have not verified it. </span>
            <a className="button-wrapper" href="">See our disclaimer</a>
          </p>
        </div>
        <p className="product-info-details">{selectedProduct.details}</p>
        <h3>Specifications</h3>

        {/* <table>
          <tbody>
            {selectedProduct.specifications.map((spec) => (
              <ProductSpec />
            ))}
          </tbody>
        </table> */}

      </div>
    );
  } else {
    return null;
  }
};

export default ProductInfo;