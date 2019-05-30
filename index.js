const express = require('express');
const keys = require('./config/keys');
const appRoutes = require('./routes/route');

const app = express();
const { PORT, APP_TOKEN } = keys;

appRoutes(app, APP_TOKEN);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
