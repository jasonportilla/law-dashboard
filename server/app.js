const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const hookJWTStrategy = require('./config/authentication/passportStrategy');
const db = require('./models');
require('dotenv').config();
const auth = require('./routes/auth/authController');
const clients = require('./routes/clients/clientController');

const app = express();

app.use(helmet());


const whitelist = ['http://localhost', 'http://example2.com'];
const corsOptions = {
	origin (origin, callback) {
		if (whitelist.indexOf(origin) !== -1) {
			callback(null, true);
		} else {
			callback(new Error('Not allowed by CORS'));
		}
	},
};

app.use(cors());

// Body parser middleware
app.use(
	bodyParser.urlencoded({
		extended: false,
	})
);
app.use(bodyParser.json());

// Hook up the HTTP logger
app.use(morgan('dev'));

// Hook up Passport
app.use(passport.initialize());

// Hook the passport JWT Strategy
hookJWTStrategy(passport);

//Set HEADERS and the allowed verb actions for API layer
app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	res.setHeader(
		'Access-Control-Allow-Methods',
		'POST, PUT, GET, PATCH, DELETE, OPTIONS'
	);
	next();
});

// Use Routes
app.use('/auth', auth);
app.use('/clients', clients);

//Expose app layer
module.exports = app;
