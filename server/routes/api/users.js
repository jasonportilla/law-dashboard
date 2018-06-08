const express = require('express');
const gravatar = require('gravatar');
const router = express.Router();
const bcrypt = require('bcryptjs');
const keys = require('../../config/keys');
const jwt = require('jsonwebtoken');
const passport = require('passport');

//Load User model
const User = require('../../models/User');

//Load input Validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

// @route Post api/users/register
// @desc Register User
// @access Public
router.post('/register', (req, res) => {
	const { errors, isValid } = validateRegisterInput(req.body);

	//Check validation
	if(!isValid) {
		return res.status(400).json(errors);
	}

	// Check to see if there is a user already in the database
	// if there is give a error message, if not save the user
	User.findOne({ email: req.body.email })
		.then(user => {
			if(user) {
				errors.email = 'email already taken';
				return res.status(400).json(errors);
			}

			//get avatar profile image
			const avatar = gravatar.url(req.body.avatar, {
				s: '200',
				r: 'pg',
				d: 'mm'
			});

			// Create new user and save to the database
			const newUser = new User({
				name: req.body.name,
				email: req.body.email, 
				avatar,
				password: req.body.password
			});

			// Salting password and ecrypting it for security purposes
			// Salt is before saving to database
			bcrypt.genSalt(10, (err, salt) => {
				bcrypt.hash(newUser.password, salt, (err, hash) => {
					if(err) throw err;
					newUser.password = hash;

					//once password is salted, save the user to the database
					newUser.save()
						.then(user => res.json(user))
						.catch(err => res.status(400).json(err));
				});
			});
		});
});

// @route Post api/users/login
// @desc Log in the User
// @access Public

router.post('/login', (req, res) => {
	const { errors, isValid } = validateLoginInput(req.body);

	//Check validation
	if(!isValid) {
		return res.status(400).json(errors);
	}

	const email = req.body.email;
	const password = req.body.password;

	User.findOne({ email })
		.then(user => {
			if(!user) {
				errors.email = 'User not found';
				return res.status(404).json(errors);
			}

			// check password
			bcrypt.compare(password, user.password)
				.then(isMatch => {
					if(isMatch) {
						const expiresIn = 3600;
					
						// create jwt payload
						const payload = { 
							id: user.id, 
							name: user.name, 
							avatar: user.avatar
						};

						// Sign in Token
						jwt.sign(payload, keys.secretOrKey, { expiresIn }, (err, token) => {
							res.json({
								success: true,
								token: 'Bearer ' + token
							});
						});
					} else {
						errors.password = 'Password incorrect';
						return res.status(400)
							.json(errors);
					}
				});
		});
});


module.exports = router;