// const router = require('express').Router();
const db = require('./config/connection');
const routes = require('./routes');
const express = require('express');
// const monggose = require('mongoose');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);



db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server for  running on port http://localhost:${PORT}/`);
  });
});

// module.exports = router;

// const client = new MongoClient(connectionStringURI);
// const { connect, connection } = require('mongoose');

// const connectionString =
//   process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mongobackendDB';

// connect(connectionString);

// module.exports = connection;


// client.connect()
//   .then(() => {
//     console.log('Connected successfully to MongoDB');
//     // Use client.db() constructor to add new db instance
//     db = client.db(dbName);

//     // start up express server
//     app.listen(port, () => {
//       console.log(`Example app listening at http://localhost:${port}`);
//     });
//   })
//   .catch((err) => {
//     console.error('Mongo connection error: ', err.message);
//   });
