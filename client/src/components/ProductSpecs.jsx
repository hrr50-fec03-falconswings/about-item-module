import React from 'react';

const ProductSpecs = ({ selectedProduct }) => {
  if (selectedProduct.specifications !== undefined) {
    return (
    <table>
      <tbody>
        {selectedProduct.specifications.map((spec) => (
          <tr><td>{spec[0]}</td><td>{spec[1]}</td></tr>
        ))}
      </tbody>
    </table>
  );

  } else return null;
};

export default ProductSpecs;