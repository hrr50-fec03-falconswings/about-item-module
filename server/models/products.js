const db = require('../database');

module.exports = {
  getProduct(params, callback) {
    let queryString = 'select * from products where id = ?';
    db.query(queryString, params, (error, results) => {
      error ? console.error(error) : callback(results);
    });
  },
  getProductCategory(params, callback) {
    let queryString = 'select * from products where product_category = ?';
    db.query(queryString, params, (error, results) => {
      error ? console.error(error) : callback(results);
    });
  }
}