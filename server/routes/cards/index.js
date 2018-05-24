const express = require('express');

const User = require('../../db/models/User');
const Priority = require('../../db/models/Priority');
const Status = require('../../db/models/Status');
const Card = require('../../db/models/Card');

const router = express.Router();

router.route('/')
  .get((req,res) => {
    return new Card()
    .fetchAll()
    .then((cards) => {
      return res.json(cards);
    })
  })

  .post((req, res) => {
    const {
      title,
      priority,
      created_by,
      assigned_to
    } = req.body;

    if(!assigned_to){
      assign_to = null;
    }
    
    return new Card({
      title,
      priority,
      status: 1,
      created_by,
      assigned_to
    })
    .save()
    .then((card) => {
      console.log(card);
      return res.json ({ success: true });
    })
    .catch((err) => {
      console.log(err);
    })
  })

module.exports = router;