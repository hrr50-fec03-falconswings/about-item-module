import React from 'react';
import faker from 'faker';

// import child component(s)
import ProductInfo from './components/ProductInfo';
import ImageSlider from './components/ImageSlider';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedProduct: {},
      relatedProducts: []
    }
  }

  componentDidMount() {
    this.props.services.products.getProduct(1, (results) => {
      console.log(results);
      this.setState({
        selectedProduct: results[0]
      });
    });
  }

  render() {
    return (
      <div className="app-render">
        <ImageSlider />
        <ProductInfo
          selectedProduct={this.state.selectedProduct} />
      </div>
    );
  }
}

export default App;