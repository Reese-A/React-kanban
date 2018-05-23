const express = require('express');

const Priority = require('../../db/models/Priority');
const Card = require('../../db/models/Card');

const router = express.Router();

router.route('/')
  .get((req, res) => {
    return Priority()
      .fetchAll()
      .then((priorities) => {
        console.log(priorities);
        return res.json(priorities);
      })
      .catch((err) => {
        console.log(err);
      })
  })

  .post((req,res) => {
    
    let { priority } = req.body;

    return new Priority({ priority })
    .save()
    .then((priority) => {
      return res.json({ success: true });
    })
    .catch((err) => {
      console.log(err);
    });
  })

module.exports = router;