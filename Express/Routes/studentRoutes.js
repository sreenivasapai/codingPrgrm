const express = require('express');
const router = express.Router();

//simple root
router.get('/',(req, res) => {
    res.send('<h1> All Students </h1> ');
});

//Route With Parameter
router.get('/:id',(req, res) => {
    const id = req.params.id;
    res.send('<h1>Student ID: ${id} </h1>');
});

module.exports = router;
