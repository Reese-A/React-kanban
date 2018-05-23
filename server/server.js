const express = require('express');
const routes = require('./routes');

const app = express();

app.use('/api', routes);

app.get('/smoke', (req, res) => {
  return res.send('smoke test')}
);

module.exports = app;