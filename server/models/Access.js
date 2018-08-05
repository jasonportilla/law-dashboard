const Sequelize = require('sequelize');
const userSchema = require('./User');
const db = require('../db');

const accessSchema = db.define('access', {
	access_id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	access_code: {
		type: Sequelize.STRING,
	},
	admin_user_id: {
		type: Sequelize.INTEGER,
		allowNull: true,
	},
});

module.exports = accessSchema;
