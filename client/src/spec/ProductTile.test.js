import React from 'react';
import ReactDOM from 'react-dom';

import ProductTile from '../components/ProductTile.jsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProductTile />, div);
});