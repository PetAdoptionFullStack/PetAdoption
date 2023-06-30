const express = require('express');
const router = express.Router();
const axios = require('axios');
const BreedModel = require('../models/breed');

router.post('/new-adoption', (req, res, next) => {

    const { name, age, breed } = req.body;

    res.send(`${name} ${age} ${breed}`)
});

router.get('/api', (req, res, next) => {
    axios.get('https://dog.ceo/api/breeds/list/all').then(response => {
        console.log(Object.keys(response.data.message));

        const breeds = Object.keys(response.data.message);

        breeds.forEach(breed => {
            const breedModel = new BreedModel(breed);
            breedModel.save();
        });

    }).catch(err => {
        console.log(err);
    });
    
    res.send("Hello");
});



router.get('/get-breedss', async (req, res, next) => {
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