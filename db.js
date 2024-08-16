// db.js
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'mern-app';

MongoClient.connect(url, (err, client) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MongoDB');
    const db = client.db(dbName);
    // We'll use this db object to interact with our database
  }
});