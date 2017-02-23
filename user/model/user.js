const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  userName: String,
  password: String,
  admin: {type: Boolean, default: false},
  enabled: {type: Boolean, default: true},
  info: {
    description: String,
    category: String,
    businessName: String,
    city: String,
    state: String,
    zip: Number,
    phone: Number
  }
});

const User = mongoose.model('User', schema);

module.exports = User;
