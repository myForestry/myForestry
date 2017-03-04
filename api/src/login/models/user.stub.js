const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    userName: String,
    password: String,
    admin: Boolean
});

const UserStub = mongoose.model('User', schema);

module.exports = UserStub;
