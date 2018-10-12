'use strict';

require('dotenv').config();

const mongoose = require('mongoose');
const data = require('../../data/icecreams');

const Icecream = require('../../models/icecream.js');

mongoose.connect('mongodb://localhost/icecreamdb', {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
})
  .then(() => {
    console.log('Connected to Mongo!');
    return Icecream.remove({});
  })
  .then(() => {
    console.log('Empty db');
    return Icecream.insertMany(data);
  })
  .then((results) => {
    console.log('You have some icecream', results.length);
    mongoose.connection.close();
  })
  .catch((error) => {
    console.log('There is a problem', error);
  });
