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
        result[0].specifications = JSON.parse(result[0].specifications);
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
        result[0].specifications = JSON.parse(result[0].specifications);
        callback(result[0]);
      })
      .catch(error => console.error('error ', error));
  }
}