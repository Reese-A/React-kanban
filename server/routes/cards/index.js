const express = require('express');

const Card = require('../../db/models/Card');

const router = express.Router();

router
  .route('/')
  .get((req, res) => {
    return new Card()
      .orderBy('priority', 'DESC')
      .fetchAll()
      .then(cards => {
        return res.json(cards);
      })
      .catch(err => {
        console.log(err);
      });
  })

  .post((req, res) => {
    let { title, priority, created_by, assigned_to } = req.body;

    title = title.trim();
    priority = Number(priority);
    created_by = Number(created_by);
    assigned_to = Number(assigned_to);

    if (!title) {
      throw new Error('Please enter a title');
    }

    if (!assigned_to) {
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
      .then(card => {
        console.log(card);
        return res.json(card);
      })
      .catch(err => {
        console.log(err);
      });
  });

router
  .route('/:id')
  .delete((req, res) => {
    const id = Number(req.params.id);
    return new Card({ id })
      .destroy()
      .then(() => {
        return res.json({ success: true });
      })
      .catch(err => {
        console.log(err);
      });
  })

  .put((req, res) => {
    const id = Number(req.params.id);

    let { title, priority, status, assigned_to } = req.body;

    if (title) {
      title = title.trim();
    }

    if (priority) {
      priority = Number(priority);
    }

    if (status) {
      status = Number(status);
    }

    if (assigned_to === '') {
      assigned_to = null;
    }

    if (assigned_to) {
      assigned_to = Number(assigned_to);
    }

    const updateObj = {
      title,
      priority,
      status,
      assigned_to
    };

    return new Card({ id })
      .save(updateObj, {
        method: 'update'
      })
      .then(card => {
        return res.json({ card });
      });
  });

module.exports = router;
