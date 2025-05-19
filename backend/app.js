const express = require('express');
const app = express();
const fs = require('fs');
const recommend = require('./recommendation');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to SimpleShop!');
});

app.get('/products', (req, res) => {
  const products = JSON.parse(fs.readFileSync('backend/products.json'));
  res.json(products);
});

app.get('/recommend/:product', (req, res) => {
  const product = req.params.product;
  const recommendations = recommend(product);
  res.json({ recommendations });
});

const port = 3000;
app.listen(port, () => {
  console.log(`SimpleShop backend running on port ${port}`);
});
