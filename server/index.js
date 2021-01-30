const express = require('express');
const controllers = require('./controllers');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const path = require('path');
const cors = require('cors');

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const cacheAssets = (req, res, next) => {
  const time = 60 * 10; // 10 minutes
  if (req.method == 'GET') {
    res.set('Cache-control', `public, max-age=${time}`)
  } else {
    res.set('Cache-control', `no-store`)
  }
  next();
}

app.use(cacheAssets);

app.get('/api/products/id/:prodId', controllers.products.getProduct);

app.get('/api/products/:category', controllers.products.getProductCategory);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});