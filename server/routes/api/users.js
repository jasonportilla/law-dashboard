const express = require('express');
const gravatar = require('gravatar');
const Router = express.Router();

//Load User model
const User = require('../../models/User');

// @route GET api/users/test
// @desc Tests users Router
// @access Public
Router.get('/test', (req, res) => {
	res.json({ msg: 'Users Works'});
});


// @route Post api/users/register
// @desc Register User
// @access Public
Router.post('/register', (req, res) => {
	User.find({ email: req.body.email, username: req.body.username })
		.then(user => {
			console.log(user);
			if(user.email) {
				return res.status(400).json({ email: 'Email already exists'});
			} else if(user.username) {
				return res.status(400).json({ email: 'Username already taken'});
			} else {
				const newUser = new User({
					username: req.body.username,
					email: req.body.email, 
					avatar,
					password: req.body.password
				});
			}
		});
});
module.exports = Router;