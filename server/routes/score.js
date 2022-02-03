const express = require('express');
const router = express.Router();
const db = require('../config');


// GET ALL score 
router.get("/", (req, res) => {
  db.query("SELECT * FROM score", (err, results) => {
    if (err) {
      return res.status(500).json({
        error: err.message,
        sql: err.sql,
      });
    } 
      return res.status(200).json(results);
  })
})


// GET score and sort by query ( time, score, player) ASCENDANT OR DESCENDANT
router.get("/sort", (req, res) => {
  const { type, asc } = req.query;
  if (req.query) {
    let sort;
    if (asc === 'true') {
      sort = 'ASC';
    } 
    if (asc === 'false') {
      sort = 'DESC';
    }
    const sqlRequest = `SELECT * FROM score ORDER BY ${type} ${sort}`;
    db.query(sqlRequest, (err, results) => {
          if (err) {
      return res.status(500).json({
        error: err.message,
        sql: err.sql,
      });
    } 
      return res.status(200).json(results);
    })
  } else {
    return res.status(400).send("Des champs sont manquants")
  }
})

// get score from id 
router.get("/:id", (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM score WHERE id = ?", id, (err, results) => {
    if (err) {
      return res.status(500).json({
        error: err.message,
        sql: err.sql,
      });
    } 
    if (results.length === 0) {
      return res.status(404).send("le score n'a pas pu être trouvé");
    }
    
    return res.status(200).json(results[0]);
  })
})

// post new score
router.post('/', (req, res) => {
  const data = req.body;
  if (data) {
    db.query("INSERT INTO score SET ?", req.body, (err, results) => {
      if (err) {
        return res.status(500).json({
          error: err.message,
          sql: err.sql,
        });
      }

      db.query("SELECT * FROM score WHERE id = ?", results.insertId, (err2, records) => {
        if (err2) {
          return res.status(500).json({
            error: err2.message,
            sql: err2.sql,
          });
        }
        return res.status(201).json(records[0]);
      })

    })
  } else {
    return res.status(400).send("Des champs sont manquants")
  }
});

// delete a score
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  db.query(
    "DELETE FROM score WHERE id = ?",
    id,
    (err, results) => {
      if (err) {
        return res.status(500).json({
          error: err.message,
          sql: err.sql,
        });
      } else {
        return res.status(200).json({ status: "Score supprimé" });
      }
    }
  );
});

module.exports = router;