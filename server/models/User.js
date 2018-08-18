const bcrypt = require('bcryptjs');

// Compares two passwords.
function comparePasswords(password, callback) {
	bcrypt.compare(password, this.password, function(error, isMatch) {
		if (error) {
			return callback(error);
		}

		return callback(null, isMatch);
	});
}

// Hashes the password for a user object.
function hashPassword(user) {
	if (user.changed('password')) {
		return bcrypt.hash(user.password, 10).then(function(password) {
			user.password = password;
		});
	}
}

const modelOptions = {
	instanceMethods: {
		comparePasswords,
	},
	hooks: {
		beforeValidate: hashPassword,
	},
};

module.exports = (sequelize, DataTypes) => {
	var User = sequelize.define('User', {
		uuid: {
			type: DataTypes.UUID,
			allowNull: false,
			defaultValue: DataTypes.UUIDV4,
		},
		firstName: DataTypes.STRING,
		lastName: DataTypes.STRING,
		username: DataTypes.STRING,
		email: DataTypes.STRING,
		password: DataTypes.STRING,
	}, modelOptions);
	User.associate = function(models) {
		// User belongsTo Firm
		User.belongsTo(models.Firm);
	};

	return User;
};
