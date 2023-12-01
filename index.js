const express = require('require');
const db = require('./config/connection');
const routes = require('./routes');

const router = require('express').router()

const PORT = proccess.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);


db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server for ${activity} running on port ${PORT}!`);
  });
});

module.exports = router;