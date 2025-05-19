function recommend(product) {
  const map = {
    "shoes": ["Running Shoes", "Sneakers", "Sandals"],
    "headphones": ["Bluetooth Headphones", "Wired Headphones", "Noise Cancelling"],
    "case": ["Smartphone Case", "Tablet Case", "Laptop Sleeve"]
  };
  return map[product.toLowerCase()] || ["No recommendations found"];
}

module.exports = recommend;
