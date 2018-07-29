const Sequelize = require('sequelize');
const db = require('../db');

const User = db.define('user', {
	user_id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
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
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true,
		trim: true,
	},
	company_name: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	password: {
		type: Sequelize.STRING,
		allowNull: false,
	},
});

// force: true will drop the table if it already exists
User.sync({ force: true }).then(() => {
	// Table created
	return User.create({
		firstName: 'Jason',
		lastName: 'Portilla',
		username: 'portillaj',
		email: 'jason.portilla85@gmail.com',
		company_name: 'Bigney Law Firm',
		password: 'port6911',
	});
});

module.exports = User;
