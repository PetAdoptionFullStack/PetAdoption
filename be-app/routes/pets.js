const express = require('express');
const router = express.Router();
const axios = require('axios');
const BreedModel = require('../models/breed');

router.post('/new-adoption', (req, res, next) => {

    const { name, age, breed } = req.body;

    res.send(`${name} ${age} ${breed}`)

});



router.get('/get-breeds', async (req, res, next) => {
    try {
      const breedModel = new BreedModel();
      const breeds = await breedModel.getBreeds();
      console.log(breeds);
      res.json(breeds);
    } catch (err) {
      console.log(err);
      res.status(500).send('Error retrieving breeds');
    }
  });

module.exports = router;