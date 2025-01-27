'use strict';

const mongoose = require('mongoose');

const userSchema =  new mongoose.Schema({
  username: String,
  email: String,
  age: Number,
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
})

mongoose.model('User', userSchema)

