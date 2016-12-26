const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  userName: String,
  password: String
});

const Admin = mongoose.model('Admin', schema);

module.exports = Admin;
