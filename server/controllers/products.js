const models = require('../models');

module.exports = {
  getProduct(req, res) {
    let prodId = [req.params.prodId];
    models.products.getProduct(prodId, (results) => {
      res.json(results);
    });
  },
  getProdCategory(req, res) {
    let category = req.params.category;
    models.products.getProdCategory(category, (results) => {
      res.json(results);
    });
  }
}