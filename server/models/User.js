const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');
const db = require('../db');
const accessSchema = require('./Access');

const userSchema = db.define('user', {
	user_id: {
		type: Sequelize.INTEGER,
		unique: true,
	},
	firstName: {
		type: Sequelize.STRING,
		allowNull: false,
		trim: true,
	},
	lastName: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	username: {
		type: Sequelize.STRING,
		allowNull: false,
		trim: true,
		unique: true,
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true,
		trim: true,
	},
	password: {
		type: Sequelize.STRING,
		allowNull: false,
	},
},
{
	hooks: {
		beforeValidate: hashPassword,
	},
},
{
	instanceMethods: {
		comparePasswords,
	},
}
);

userSchema.sync({ force: true });

function comparePasswords(password, callback) {
	bcrypt.compare(password, this.password, (error, isMatch) => {
		if (error) {
			return callback(error);
		}
		return callback(null, isMatch);
	});
}

// Hashes the password for user Object
function hashPassword(user) {
	if (user.changed('password')) {
		return bcrypt.hash(user.password, 10)
			.then(password => {
				user.password = password;
			});
	}
}

module.exports = userSchema;
