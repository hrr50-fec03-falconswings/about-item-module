import React from 'react';
import ReactDOM from 'react-dom';

// import services
import services from '../services';

// import main App component
import App from './components/App';

ReactDOM.render(<App services={services} />, document.getElementById('root'));