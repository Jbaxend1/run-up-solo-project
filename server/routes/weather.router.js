const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');


router.get(`/:airport`, (req, res) => {
    console.log(req.params.airport);
    axios.get(`https://api.checkwx.com/metar/${req.params.airport}/decoded?x-api-key=47eabecb43254ef0823a9cc47a`)
        .then((response) => {
            res.send(response.data);
        }).catch((e) => {
            console.log(e);
        });
})

module.exports = router;

