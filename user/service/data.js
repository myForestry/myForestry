const mongoose = require('mongoose');
const User = require('../model/user');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/myForestry');

mongoose.connection.once('connected', function() {
	console.log("User db connection successful");
});


module.exports.addBusiness = (business) => {
	const bsn = new User({
		userName: business.userName,
		password: business.password,
		admin: false,
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
	bsn.save();
};

module.exports.getBusinesses = () => {
	return new Promise(function(resolve,reject) {
		User.find({admin: false}, function(err,data) {
			if (err) console.log(err);
			resolve(data);
		});
	});
};
