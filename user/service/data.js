const mongoose = require('mongoose');
const User = require('../model/user');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/myForestry');

mongoose.connection.once('connected', function() {
	console.log("User db connection successful");
});

module.exports.save = (business) => {
	const bsn = new User({
		userName: business.userName,
		password: business.password,
		admin: false,
		enabled: true,
		info: {
			description: business.description,
			category: business.category,
			businessName: business.businessName,
			city: business.city,
			state: business.state,
			zip: business.zip,
			phone: business.phone
		}
	});
	return bsn.save();
};

module.exports.getAll = () => {
	return new Promise(function(resolve,reject) {
		User.find({admin: false}, function(err,data) {
			if (err) console.log(err);
			resolve(data);
		});
	});
};

module.exports.find = (id) => {
	return new Promise(function(resolve,reject) {
		User.findOne({_id: id}, function(err,data) {
				if (err) console.log(err);
				resolve(data);
		});
	});
};

module.exports.update = (business) => {
	return User.findOneAndUpdate({_id: business.id}, business, {upsert: true});
};
