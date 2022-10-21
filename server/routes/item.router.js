const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// CHEKLIST ITEM ROUTER

router.get('/before_engine', (req, res) => {
    console.log(req.user);
    console.log(req.body);
    if(req.isAuthenticated()) {
        let queryText = `SELECT * FROM "item" WHERE "aircraft_id" = $1 AND "category" = "before_engine";`;
    }
})

module.exports = router;