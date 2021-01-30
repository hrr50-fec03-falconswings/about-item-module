const express = require('express');
const controllers = require('./controllers');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const path = require('path');
const cors = require('cors');
const compression = require('compression');

app.use(cors());
app.use(compression());
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/products/id/:prodId', controllers.products.getProduct);

app.get('/api/products/:category', controllers.products.getProductCategory);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
