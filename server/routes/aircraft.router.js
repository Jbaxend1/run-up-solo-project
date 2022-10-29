const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// AIRCRAFT ROUTER //

router.get('/', (req, res) => {
  // GET route code here
  console.log(req.user)
  if (req.isAuthenticated()) {
    const queryText = `SELECT * FROM "aircraft" WHERE "user_id" = $1 ORDER BY "id" DESC;`;
    pool.query(queryText, [req.user.id]).then((result) => {
      res.send(result.rows);
    }).catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
  } else {
    res.sendStatus(403) // Forbidden
  }
});

router.get('/detail/:id', (req, res) => {
  // GET route code here
  console.log(req.body);
  if (req.isAuthenticated()) {
    const query = `SELECT * FROM "aircraft" WHERE "id" = $1 AND "user_id" = $2;`;

    pool.query(query, [req.params.id, req.user.id])
      .then(result => {
        res.send(result.rows[0]);
      })
      .catch((error) => {
        console.log(error);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403) // Forbidden
  }
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

router.put('/:id', (req, res) => {

  if (req.isAuthenticated()) {
  const query = `UPDATE "aircraft" SET "name" = $1, "hours" = $2
                 WHERE "id" = $3 AND "user_id" = $4;`;

  pool.query(query, [req.body.name, req.body.hours, req.params.id, req.user.id])
      .then(results => {
        res.sendStatus(200);
      }).catch( error => {
        console.log(error);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403) // Forbidden
  }
})

module.exports = router;
