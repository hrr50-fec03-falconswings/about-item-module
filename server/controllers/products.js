const models = require('../models');

module.exports = {
  getProduct(req, res) {
    models.getProductS('electronics', (results) => {
      res.json(results);
    });
  }
}