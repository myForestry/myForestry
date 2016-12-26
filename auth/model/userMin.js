const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  userName: String,
  password: String,
  admin: Boolean
});

const UserMin = mongoose.model('User', schema);

module.exports = UserMin;
