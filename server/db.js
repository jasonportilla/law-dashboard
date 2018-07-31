//const mysql = require('mysql');
const Sequelize = require('sequelize');
const keys = require('./config/keys');

const sequelize = new Sequelize('law_dashboard', 'root', 'root', {
	host: 'localhost',
	dialect: 'mysql',
	port: 8889,
	operatorsAliases: false,

	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
});

//This will be the public function to create a mysql connection
// exports.connect = function () {

// 	//This is the current state variable which will be the
// 	//mysql pool
// 	state.pool = mysql.createPool({
// 		host: 'localhost',
// 		user: root,
// 		password: root,
// 		database: 'law_dashboard',
// 		port: 8889,
// 	});
// };

//This get function will be called by the data model to
//get the state pool connect and to execute the query
// exports.get = function () {
// 	return state.pool;
// };

module.exports = sequelize;
