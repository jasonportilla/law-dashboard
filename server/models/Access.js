const Sequelize = require('sequelize');
const User = require('./User');
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
	user_id: {
		type: Sequelize.INTEGER,
		references: 'users',
		referencesKey: 'user_id',
		allowNull: false,
	},
	admin_user_id: {
		type: Sequelize.INTEGER,
		references: 'users',
		referencesKey: 'user_id',
		allowNull: true,
	},
});

accessSchema.hasMany(User);

module.exports = accessSchema;
