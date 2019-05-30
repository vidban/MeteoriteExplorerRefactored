const axios = require('axios');
const url = 'https://data.nasa.gov/resource/gh4g-9sfh.json';

module.exports = (app, APP_TOKEN) => {
  app.get('/api', async (req, res) => {
    await axios
      .get(`${url}?$$app_token=${APP_TOKEN}`)
      .then((response) => res.send(response.data))
      .catch((error) => console.log(error));
  });
};
