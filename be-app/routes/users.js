const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.post('/submit', (req, res, next) => {
  
  const { country, state, city } = req.body;

  res.send(`Country: ${country} State: ${state} City: ${city}`);
})

module.exports = router;
