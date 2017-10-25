const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hotelSchema = new Schema({
  description:  {
    type: String,
    unique: true
  },
  image: {
    type: String,
    unique: true
  },
});

module.exports = hotelSchema;