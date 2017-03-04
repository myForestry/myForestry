'use strict';

var mongoose = require('mongoose');
var schema = new mongoose.Schema({
    userName: String,
    password: String,
    admin: Boolean
});

var UserStub = mongoose.model('User', schema);

module.exports = UserStub;