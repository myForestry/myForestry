const mongoose = require('mongoose');
const Admin = require('../model/admin');
const Business = require('../model/business');

let app, config;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/myForestry/db');

mongoose.connection.once('connected', function() {
	console.log("Database connected successfully");
});


module.exports = function(ap,conf) {
	app = ap;
	config = conf;

	if (conf.environment === "DEV") {
		Admin.find({}, (err,data) => {
			if (data.length === 0) {
				const adm = new Admin({
					userName: conf.api.auth.default.admin.userName,
					password: conf.api.auth.default.admin.password
				});
				adm.save();
			}
		})
	}

};

module.exports.adminLogin = (username, password) => {

	Admin.find({userName: username, password: password}, (data) => {
		return data;
	}, (err) => {
		console.log(err);
		return false;
	});

};
