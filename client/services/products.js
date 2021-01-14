module.exports = {
  getProduct(params, callback) {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`http://localhost:3000/api/products/id/${params[0]}`, requestOptions)
      .then(response => response.text())
      .then(result => callback(JSON.parse(result)))
      .catch(error => console.error('error ', error));
  },
  getProductCategory (params, callback) {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`http://localhost:3000/api/products/electronics${params[0]}`, requestOptions)
      .then(response => response.text())
      .then(result => callback(JSON.parse(result)))
      .catch(error => console.error('error ', error));
  }
}