const express = require('express');

const User = require('../../db/models/User');
const Priority = require('../../db/models/Priority');
const Status = require('../../db/models/Status');
const Card = require('../../db/models/Card');

const router = express.Router();

router.route('/')
  .get((req,res) => {
    return new Card()
    .fetchAll(/* {withRelated: ['status', 'priority', 'created_by', 'assigned_to']} */)
    .then((cards) => {
      return res.json(cards);
    })
    .catch((err) => {
      console.log(err);
    })
  })

  .post((req, res) => {
    let {
      title,
      priority,
      created_by,
      assigned_to
    } = req.body;

    title = title.trim();
    priority = Number(priority);
    created_by = Number(created_by);
    assigned_to = Number(assigned_to);

    if (!title) {
      throw new Error('Please enter a title');
    }

    if(!assigned_to){
      assigned_to = null;
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
      return res.json(card)
    })
    .catch((err) => {
      console.log(err);
    })
  })


router.route('/:id')
  .delete((req,res) => {
    const id = req.params.id;
    return new Card({ id })
    .destroy()
    .then(() => {
      return res.json({ success: true });
    })
    .catch((err) => {
      console.log(err);i
    });
  })

  .put((req, res) => {
    const id = req.params.id;
    
    let {
      title,
      priority,
      status,
      assigned_to
    } = req.body;

    title = title.trim();
    priority = Number(priority);
    status = Number(status);
    assigned_to = Number(assigned_to);

    const updateObj = {
      title,
      priority,
      status,
      assigned_to
    }

    return new Card({ id })
    .save(updateObj, {
      method: 'update',
      // patch: true
    })
    .then((card) => {
      return res.json({card});
    })
  })

module.exports = router;