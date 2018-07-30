const User = require('../../models/User');

//This is the get function that is called by the controller
exports.getLogin = function (done) {
	User.findAll().then(users => {
		done(null, users);
	});
};
