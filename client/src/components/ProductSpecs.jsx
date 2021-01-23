import React from 'react';

// import css module
import s from '../styles/ProductSpecs.css';

const ProductSpecs = ({ selectedProduct }) => {
  if (selectedProduct.specifications !== undefined) {
    return (
      <div className="product-spec-container">
        <h3>Specifications</h3>
        <table className="product-spec-table">
          <tbody>
            {selectedProduct.specifications.map((spec, index) => (
              <tr key={spec[0]} className={"product-spec-row-" + (index % 2)}>
                <td>
                  <div className="product-spec-entry">{spec[0]}</div>
                </td>
                <td>
                  <div className="product-spec-entry">{spec[1]}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else return null;
};

export default ProductSpecs;