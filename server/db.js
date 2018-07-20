const mysql = require('mysql');
const keys = require('./config/keys');

const state = {
	pool: null,
};


//This will be the public function to create a mysql connection
exports.connect = function (mode) {

	//This is the current state variable which will be the
	//mysql pool
	state.pool = mysql.createPool({
		host: keys.awsURI,
		user: keys.user,
		password: keys.password,
		database: keys.database,
	});
};

//This get function will be called by the data model to
//get the state pool connect and to execute the query
exports.get = function () {
	return state.pool;
};
