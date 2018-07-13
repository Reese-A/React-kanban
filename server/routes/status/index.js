const express = require('express');

const Status = require('../../db/models/Status');
const Card = require('../../db/models/Card');

const router = express.Router();

router.route('/')
  .get((req, res) => {
    return new Status()
      .fetchAll()
      .then((status) => {
        console.log(status);
        return res.json(status);
      })
      .catch((err) => {
        console.log(err);
      });
  })
  
  .post((req, res) => {

    let { name } = req.body;

    return new Status({ name })
      .save()
      .then((status) => {
        return res.json({ success: true });
      })
      .catch((err) => {
        console.log(err);
      });
  })

module.exports = router;