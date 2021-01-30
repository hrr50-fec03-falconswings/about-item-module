import React, { lazy, Suspense } from 'react';
import faker from 'faker';

// import stylesheet
import s from '../styles/App.css';

// import child component(s)
import ProductTile from './ProductTile';
import ProductInfo from './ProductInfo';
// lazy loaded
const TileSlider = lazy(() => import('./TileSlider'));

// suspense placeholder component
const renderLoader = () => <p>Loading</p>;




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
    this.setProductAndCategory();
  }

  setProductAndCategory(event, prodId = 1) {
    if (event) event.preventDefault();
    this.productService.getProduct(prodId, (results) => {
      this.setState({
        selectedProduct: results
      });
      this.productService.getProductCategory(results.product_category, (results) => {
        let deleted = results.splice(0, 1);
        let related = [...results];
        this.setState({
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
        <Suspense fallback={renderLoader()}>
          <TileSlider
            className="tile-slider-container"
            selectedProduct={this.state.selectedProduct}
            relatedProducts={this.state.relatedProducts}
            currentPage={this.state.currentPage}
            setCurrentPage={this.setCurrentPage.bind(this)}
            setProductAndCategory={this.setProductAndCategory.bind(this)} />
        </Suspense>
        <ProductInfo
          selectedProduct={this.state.selectedProduct}
          relatedProducts={this.state.relatedProducts} />
      </div>
    );
  }
}

export default App;