import React from 'react';

const AboutList = ({ selectedProduct }) => {
  return(
    <div className="about-item-section">
      <h2>About This Item</h2>
      <p>{selectedProduct.details}</p>
      <h3>Specifications</h3>
      <div className="spec-container">

      </div>
    </div>

  )
};

export default AboutList;