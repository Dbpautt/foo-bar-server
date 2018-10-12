'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const icecreamSchema = new Schema({
  flavour: {
    type: String,
    required: true
  },
  topping: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
});

const Icecream = mongoose.model('Icecream', icecreamSchema);

module.exports = Icecream;
