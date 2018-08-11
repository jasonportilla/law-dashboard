const bcrypt = require('bcryptjs');

exports.comparePasswords = (password, callback) => {
	bcrypt.compare(password, this.password, (error, isMatch) => {
		if (error) {
			return callback(error);
		}
		return callback(null, isMatch);
	});
};

//Hashes the password for user Object
exports.hashPassword = (user) => {
	if (user.changed('password')) {
		return bcrypt.hash(user.password, 10)
			.then(password => {
				user.password = password;
			});
	}
};
