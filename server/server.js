const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use('/api', routes);

app.use('*', (req, res) => {
  return res.json({message: 'blah'});
})

module.exports = app;