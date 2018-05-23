const express = require('express');

const User = require('../../db/models/User');
const Card = require('../../db/models/Card');

const router = express.Router();

router.route('/register')
.post((req, res) => {
  let {
    name
  } = req.body;

  return new User({ name })
  .save()
  .then((user) => {
    return res.json({ success: 'true' });
  })
  .catch((err) => {
    console.log(err);
  });

})

module.exports = router;