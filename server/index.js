const express = require('express');
const controllers = require('./controllers');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/api/products/:prodId', controllers.products.getAll);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});