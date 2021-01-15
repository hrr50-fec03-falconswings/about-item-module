import React from 'react';
import faker from 'faker';

// import child component(s)
import AboutItem from './components/AboutItem';
import RelatedItemList from './components/RelatedItemList';

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
        <RelatedItemList />
        <AboutItem
          selectedProduct={this.state.selectedProduct} />
      </div>
    );
  }
}

export default App;