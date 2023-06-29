const express = require('express');
const router = express.Router();

router.post('/new-adoption', (req, res, next) => {

    const { name, age, breed } = req.body;

    res.send(`${name} ${age} ${breed}`)

});

module.exports = router;