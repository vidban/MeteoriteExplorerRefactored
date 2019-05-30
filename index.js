const express = require('express');
const keys = require('./config/keys');
const appRoutes = require('./routes/route');

const app = express();
const { PORT, APP_TOKEN } = keys;

appRoutes(app, APP_TOKEN);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
