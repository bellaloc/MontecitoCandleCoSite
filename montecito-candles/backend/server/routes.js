const express = require('express');
const router = express.Router();

router.get('/products', (req, res) => {
  res.json([
    { id: 1, name: 'Luxury Soy Candle', price: 29.99 },
    { id: 2, name: 'Lavender Bliss Candle', price: 34.99 }
  ]);
});

module.exports = router;
