const express = require('express');
const router = express.Router();
const axios = require('axios');
const BreedModel = require('../models/breed');

router.post('/new-adoption', (req, res, next) => {

    const { name, age, breed } = req.body;

    res.send(`${name} ${age} ${breed}`)

});



router.get('/get-breeds', (req, res, next) => {
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

module.exports = router;