const mongoose = require('mongoose');
const hotelSchema = require('../schema/hotel');
const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;