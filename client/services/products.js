module.exports = {
  getProduct(prodId, callback) {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`/api/products/id/${prodId}`, requestOptions)
      .then(response => response.text())
      .then(result => {
        result = JSON.parse(result);
        result[0].specifications = JSON.parse(result[0].specifications);
        result[0].images = JSON.parse(result[0].images);
        callback(result[0]);
      })
      .catch(error => console.error('error ', error));
    },
    getProductCategory (category, callback) {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      fetch(`/api/products/${category}`, requestOptions)
      .then(response => response.text())
      .then(result => {
        result = JSON.parse(result);
        result.forEach((product) => {
          product.specifications = JSON.parse(product.specifications);
          product.images = JSON.parse(product.images);
        })
        callback(result);
      })
      .catch(error => console.error('error ', error));
  }
}
