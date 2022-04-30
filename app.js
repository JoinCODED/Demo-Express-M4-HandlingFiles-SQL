const express = require('express');
const app = express();
const usersRoutes = require('./api/users/users.routes');
const db = require('./db/models');
const path = require('path');

const run = async () => {
  try {
    await db.sequelize.sync();
    console.log('Connection to the database successful!');
    await app.listen(8000, () => {
      console.log('The application is running on localhost:8000');
    });
  } catch (error) {
    console.error('Error connecting to the database: ', error);
  }
};

run();
app.use(express.json());
app.use('/users', usersRoutes);
app.use('/media', express.static(path.join(__dirname, 'media')));
