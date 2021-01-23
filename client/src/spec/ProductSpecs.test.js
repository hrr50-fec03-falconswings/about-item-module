import React from 'react';
import ReactDOM from 'react-dom';

import ProductSpecs from '../components/ProductSpecs.jsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const selectedProduct = {
    id: 9999,
    name: 'testName',
    images: 'testImages',
    details: '',
    price: 'testPrice',
    product_category: 'test',
    reviews_avg: 1.555,
    reviews_total: 2999,
    specifications: [['nested array 1'], ['nested array 2']]
  }
  ReactDOM.render(<ProductSpecs
    selectedProduct={selectedProduct} />, div);
});
