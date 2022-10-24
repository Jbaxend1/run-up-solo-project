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

router.get('/run-up/:id', (req, res) => {
    console.log(req.user);
    console.log(req.params.id);
    if(req.isAuthenticated()) {
        const queryText = `SELECT * FROM "item" WHERE "aircraft_id" = $1 AND "category" = 'run_up';`;

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

router.get('/takeoff/:id', (req, res) => {
    console.log(req.user);
    console.log(req.params.id);
    if(req.isAuthenticated()) {
        const queryText = `SELECT * FROM "item" WHERE "aircraft_id" = $1 AND "category" = 'takeoff';`;

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

router.get('/edit/:id', (req, res) => {
    console.log(req.user);
    console.log(req.params.id);
    if(req.isAuthenticated()) {
        const queryText = `SELECT * FROM "item" WHERE "aircraft_id" = $1 ORDER BY "category";`;

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

router.post('/', (req, res) => {
    console.log('user', req.user);
    console.log(req.body);
    if(req.isAuthenticated()) {
        // all lowercase with singular names
        const queryText = `INSERT INTO "item" ("description", "action", "aircraft_id", "category")
                           VALUES ($1, $2, $3, $4);`;
        pool.query(queryText, [req.body.desc, req.body.action, req.body.aircraft, req.body.category]).then(() => {
            res.sendStatus(201);
        }).catch((e) => {
            res.sendStatus(500);
        })
    } else {
        res.sendStatus(403);
    }
})

router.delete('/:id', (req, res) => {

    console.log(req.params.id);

    if(req.isAuthenticated()) {
        const queryText = `DELETE FROM "item" WHERE "id" = $1;`;

        pool.query(queryText, [req.params.id])
            .then( (results) => {
                res.sendStatus(200);
            }). catch( error => {
                console.log('Error: DELETE', error);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403) // Forbidden
      }
}) 

module.exports = router;