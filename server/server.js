const express = require('express');
const app = express();
var Client = require('mariasql');
const bodyParser = require('body-parser');
const passport = require('passport');
const PORT = process.env.PORT || 5000;
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const clients = require('./routes/api/clients');

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
	
var c = new Client({
	host: 'mylawdash.c9os02zlzyuu.us-east-1.rds.amazonaws.com',
	user: 'portillaj',
	password: 'port6911',
	port: '3306',
	db: 'law_dashboard'
});

//Maria DB Connection
c.query('SELECT * FROM test_table;', function(err, rows) {
	if (err)
		throw err;
});

c.end();

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/client-profile', clients);

app.listen(PORT, () => {
	console.log(`server listening on port ${PORT}`);
});