const mongoose = require('mongoose');
const User = require('../model/user');

let app, config;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/myForestry');

mongoose.connection.once('connected', function() {
	console.log("User db connection successful");
});


module.exports = function(ap,conf) {
	app = ap;
	config = conf;

};
