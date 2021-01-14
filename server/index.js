const express = require('express');
const controllers = require('./controllers');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/products/id/:prodId', controllers.products.getProduct);

app.get('/api/products/:category', controllers.products.getProdCategory);



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});