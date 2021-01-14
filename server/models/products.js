const db = require('../database');

module.exports = {
  getProduct(params, callback) {
    let queryString = 'select * from products where product_categoy = ?;';
    db.query(queryString, params, (error, results) => {
      error ? console.error(error) : callback(results);
    });
  }
}