const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// CHEKLIST ITEM ROUTER

router.get('/before-engine/:id', (req, res) => {
    console.log(req.user);
    console.log(req.params.id);
    if(req.isAuthenticated()) {
        const queryText = `SELECT * FROM "item" WHERE "aircraft_id" = $1 AND "category" = 'before_engine';`;

        pool.query(queryText, [req.params.id])
            .then( result => {
                res.send(result.rows);
            }). catch( error => {
                console.log('Error: GET checklist by id');
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403) // Forbidden
      }
});

router.get('/taxi/:id', (req, res) => {
    console.log(req.user);
    console.log(req.params.id);
    if(req.isAuthenticated()) {
        const queryText = `SELECT * FROM "item" WHERE "aircraft_id" = $1 AND "category" = 'taxi';`;

        pool.query(queryText, [req.params.id])
            .then( result => {
                res.send(result.rows);
            }). catch( error => {
                console.log('Error: GET checklist by id');
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403) // Forbidden
      }
});

module.exports = router;