const express = require('express');

const Priority = require('../../db/models/Priority');
const Card = require('../../db/models/Card');

const router = express.Router();

router.route('/')
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