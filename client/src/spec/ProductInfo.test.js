import React from 'react';
import ReactDOM from 'react-dom';

import ProductInfo from '../components/ProductInfo.jsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProductInfo />, div);
  ReactDOM.unmountComponentAtNode(div);
});