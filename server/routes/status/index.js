const express = require('express');

const Status = require('../../db/models/Status');
const Card = require('../../db/models/Card');

const router = express.Router();

router.route('/')
  .post((req, res) => {

    let { status } = req.body;

    return new Status({ status })
      .save()
      .then((status) => {
        return res.json({ success: true });
      })
      .catch((err) => {
        console.log(err);
      });
  })

module.exports = router;