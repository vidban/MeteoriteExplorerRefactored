const express = require('express');
const keys = require('./config/keys');

const app = express();
const { PORT, APP_TOKEN } = keys;

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(PORT);
