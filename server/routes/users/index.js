const express = require('express');

const User = require('../../db/models/User');
const Card = require('../../db/models/Card');

const router = express.Router();

router.route('/')
  .get((req, res) => {
    return new User()
      .fetchAll()
      .then((users) => {
        console.log(users);
        return res.json(users);
      })
      .catch((err) => {
        console.log(err);
      });
  })

  .post((req, res) => {
    let {
      name
    } = req.body;

    return new User({
        name
      })
      .save()
      .then((user) => {
        return res.json({
          success: 'true'
        });
      })
      .catch((err) => {
        console.log(err);
      });

  })

module.exports = router;