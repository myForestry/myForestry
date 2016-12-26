const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  userName: String,
  password: String,
  businessName: String,
  category: String,
  description: String
});

const Business = mongoose.model('Business', schema);

module.exports = Business;
