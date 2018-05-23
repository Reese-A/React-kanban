const express = require('express');

const User = require('../../db/models/User');
const Priority = require('../../db/models/Priority');
const Status = require('../../db/models/Status');
const Card = require('../../db/models/Card');

const router = express.Router();

module.exports = router;