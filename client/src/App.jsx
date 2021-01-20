import React from 'react';
import faker from 'faker';

// import child component(s)
import TileSlider from './components/TileSlider';
import ProductTile from './components/ProductTile';
import ProductInfo from './components/ProductInfo';


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
    // window.location.pathName
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
        <TileSlider />
        <ProductInfo
          selectedProduct={this.state.selectedProduct}
          relatedProducts={this.state.relatedProducts} />
      </div>
    );
  }
}

export default App;