import React from 'react';

const ProductSpecs = ({ selectedProduct }) => {
  if (selectedProduct.specifications !== undefined) {
    return (
    <table className='product-spec-table'>
      <tbody>
        {selectedProduct.specifications.map((spec, index) => (
          <tr key={spec[0]} className={'product-spec-row-' + index % 2}>
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
  );

  } else return null;
};

export default ProductSpecs;