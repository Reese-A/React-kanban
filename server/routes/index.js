const express = require('express');

const user = require('../../db/models/User');
const priority = require('../../db/models/Priority');
const status = require('../../db/models/Status');
const card = require('../../db/models/Card');

const router = express.Router();

router.use('/users', users);
router.use('/cards', cards);
router.use('/priorities', priority);
router.use('/status', status);

module.exports = router;