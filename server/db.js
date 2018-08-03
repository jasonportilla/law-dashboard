const Sequelize = require('sequelize');
const config = require('./config/keysLocal');

const sequelize = new Sequelize(
	config.db.database,
	config.db.user,
	config.db.password,
	config.db.details,
	config.db.pool,
);

module.exports = sequelize;
