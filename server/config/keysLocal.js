const config = module.exports;

config.db = {
	user: 'root',
	password: 'root',
	database: 'law_dashboard',
};

config.db.details = {
	host: 'localhost',
	port: 8889,
	dialect: 'mysql',
};

config.db.pool = {
	max: 5,
	min: 0,
	acquire: 30000,
	idle: 10000,
};

config.keys = {
	secret: '/dljfdlfeoueohfdkfhelfjwljrweoherkbfwknaeoure=',
};

