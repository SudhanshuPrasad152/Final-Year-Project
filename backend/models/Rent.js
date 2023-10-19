const mongoose = require("mongoose");
const { Schema } = mongoose;

const rentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  productType: {
    type: String,
    required: true,
  },
  productSpecification: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
    required: true,
  },
  productImage: {
    type: String,
    required: true,
  },
});

const Rent = mongoose.model('rent', rentSchema);
module.exports = Rent;
