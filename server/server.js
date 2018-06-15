const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const PORT = process.env.PORT || 5000;
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const clients = require('./routes/api/clients');

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose.connect(db)
	.then(() => {
		console.log('MongoDB connected');
	})
	.catch(err => console.log(err));
  
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