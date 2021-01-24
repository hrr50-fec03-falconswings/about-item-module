import React from 'react';
import faker from 'faker';

// import stylesheet
import s from './styles/App.css';

// import child component(s)
import TileSlider from './components/TileSlider';
import ProductTile from './components/ProductTile';
import ProductInfo from './components/ProductInfo';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedProduct: {},
      relatedProducts: [],
      currentPage: 0
    }

    // service alias
    this.productService = this.props.services.products;
  }

  componentDidMount() {
    this.productService.getProduct(1, (results) => {
      console.log(results);
      this.productService.getProductCategory(results.product_category, (results) => {
        let selected = results.splice(0, 1);
        let related = [...results];
        console.log(related)
        this.setState({
          selectedProduct: selected[0],
          relatedProducts: related,
          currentPage: 1
        });
      })
    });
  }

  setCurrentPage(val) {
    this.setState({
      currentPage: val
    });
  }

  render() {
    return (
      <div className="app-render">
        {/* <Slider
          className="tile-slider-container"
          selectedProduct={this.state.selectedProduct}
          relatedProducts={this.state.relatedProducts}
          currentPage={this.state.currentPage}
          setCurrentPage={this.setCurrentPage.bind(this)} /> */}
        <TileSlider
          className="tile-slider-container"
          selectedProduct={this.state.selectedProduct}
          relatedProducts={this.state.relatedProducts}
          currentPage={this.state.currentPage}
          setCurrentPage={this.setCurrentPage.bind(this)} />
        <ProductInfo
          selectedProduct={this.state.selectedProduct}
          relatedProducts={this.state.relatedProducts} />
      </div>
    );
  }
}

export default App;