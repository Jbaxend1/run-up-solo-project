const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// AIRCRAFT ROUTER //

router.get('/', (req, res) => {
  // GET route code here
  console.log(req.user)
  if (req.isAuthenticated()) {
    const queryText = `SELECT * FROM "aircraft" WHERE "user_id" = $1;`;
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

module.exports = router;
