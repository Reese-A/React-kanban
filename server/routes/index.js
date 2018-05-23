const express = require('express');

const users = require('./users');
const priorities = require('./priorities');
const status = require('./status');
const cards = require('./cards');

const router = express.Router();

router.use('/users', users);
router.use('/cards', cards);
router.use('/priorities', priorities);
router.use('/status', status);

module.exports = router;