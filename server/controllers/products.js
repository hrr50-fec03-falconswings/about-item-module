const models = require('../models');

module.exports = {
  getProduct(req, res) {
    let prodId = [req.params.prodId];
    models.products.getProduct(prodId, (results) => {
      res.json(results);
    });
  },
  getProductCategory(req, res) {
    let category = req.params.category;
    models.products.getProductCategory(category, (results) => {
      res.json(results);
    });
  }
}