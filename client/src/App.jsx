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

    this.productServices = this.props.services.products;
  }

  componentDidMount() {
    this.productServices.getProduct(1, (results) => {
      console.log(results);
      this.productServices.getProductCategory(results.product_category, (results) => {
        let selected = results.splice(0, 1);
        let related = [...results];
        console.log(related)
        this.setState({
          selectedProduct: selected[0],
          relatedProducts: related
        });
      })
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