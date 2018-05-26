const express = require('express');
const gravatar = require('gravatar');
const router = express.Router();
const bcrypt = require('bcryptjs');

//Load User model
const User = require('../../models/User');

//Load input Validation
const validateRegisterInput = require('../../validation/register');

// @route GET api/users/test
// @desc Tests users Router
// @access Public
router.get('/test', (req, res) => {
	res.json({ msg: 'Users Works'});
});


// @route Post api/users/register
// @desc Register User
// @access Public
router.post('/register', (req, res) => {
	const { errors, isValid } = validateRegisterInput(req.body);

	//Check validation
	if(!isValid) {
		return res.status(400).json(errors);
	}

	User.findOne({ email: req.body.email })
		.then(user => {
			if(user) {
				errors.email = 'email already taken';
				return res.status(400).json(errors);
			}
			const avatar = gravatar.url(req.body.avatar, {
				s: '200',
				r: 'pg',
				d: 'mm'
			});

			const newUser = new User({
				name: req.body.name,
				email: req.body.email, 
				avatar,
				password: req.body.password
			});

			bcrypt.genSalt(10, (err, salt) => {
				bcrypt.hash(newUser.password, salt, (err, hash) => {
					if(err) throw err;
					newUser.password = hash;
					newUser.save()
						.then(user => res.json(user))
						.catch(err => res.status(400).json(err));
				});
			});
		});
});
module.exports = router;