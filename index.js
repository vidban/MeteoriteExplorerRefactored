const express = require('express');
const keys = require('./config/keys');
const appRoutes = require('./routes/route');

const app = express();
appRoutes(app);

const { PORT, APP_TOKEN } = keys;

app.listen(PORT);
