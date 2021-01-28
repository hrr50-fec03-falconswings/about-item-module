module.exports = {
  getProduct(prodId, callback) {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`http://localhost:3000/api/products/id/${prodId}`, requestOptions)
      .then(response => response.text())
      .then(result => {
        result = JSON.parse(result);
        result[0].details = JSON.parse(result[0].details);
        result[0].specifications = JSON.parse(result[0].specifications);
        result[0].images = JSON.parse(result[0].images);
        debugger;
        callback(result[0]);
      })
      .catch(error => console.error('error ', error));
    },
    getProductCategory (category, callback) {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      fetch(`http://localhost:3000/api/products/${category}`, requestOptions)
      .then(response => response.text())
      .then(result => {
        result = JSON.parse(result);
        result.forEach((product) => {
          product.details = JSON.parse(product.details);
          product.specifications = JSON.parse(product.specifications);
          product.images = JSON.parse(product.images);
        })
        callback(result);
      })
      .catch(error => console.error('error ', error));
  }
}