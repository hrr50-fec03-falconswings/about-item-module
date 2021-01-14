import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedProduct: {},
      relatedProducts: []
    }
  }

  componentDidMount() {
    this.props.services.products.getProduct([1], (results) => {
      console.log(results);
    });
  }

  render() {
    return (
      <h1>Yo</h1>
    );
  }
}

export default App;