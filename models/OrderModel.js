'use strict';

const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  product: String,
  price: Number,
  publishDate: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
})

mongoose.model('Order', orderSchema)

