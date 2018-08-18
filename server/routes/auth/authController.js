const express = require('express');
const router = express.Router();
const sequelize = require('sequelize');
const jwt = require('jsonwebtoken');
// const keys = require('../../config/keysLocal');
const login = require('../../config/authentication/passportStrategy');
const { User, Firm } = require('../../models');

//Testing MySQL Connection
router.get('/', (req, res) => {
	login(passport);
});

// @route   POST /auth/login
// @desc    login user to application
// @access  Private
router.post('/login', (req, res) => {
	// User.findOne({ username }).then(user => {
	// 	const payload = { firstName: user.firstName, lastName: user.lastName }; // Create JWT Payload
	// 	// Sign Token
	// 	jwt.sign(
	// 		payload,
	// 		keys.secretOrKey,
	// 		{ expiresIn: 3600 },
	// 		(err, token) => {
	// 			res.json({
	// 				success: true,
	// 				token: 'Bearer ' + token,
	// 			});
	// 		}
	// 	);
	// });
});

// @route   POST /auth/logout
// @desc    logout user from the application
// @access  Private
router.post('/logout', (req, res) => {

});

// @route   POST /auth/register
// @desc    register user to application
// @access  Public
router.post('/register', (req, res) => {
	Firm.create({
		firmName: req.body.firmName,
	}).then((firm) => {
		User.findOne({
			where: {
				username: req.body.username,
			} }).then(user => {
			if (user) {
				res.json({ msg: 'username already taken ' });
			}
			else {
				firm.createUser({
					uuid: sequelize.Utils.generateUUID,
					firstName: req.body.firstName,
					lastName: req.body.lastName,
					username: req.body.username,
					email: req.body.email,
					password: req.body.password,
				}).then((result) => res.send(result));
			}
		});
	});
});

router.get('/users', (req, res) => {
	// User.findAll().then(users => res.json(users));
	// Firm.findAll().then(firms => res.json(firms));
});

// @route   POST /auth/forgotPassword
// @desc    retrieve password for the user
// @access  Public
router.post('/forgotPassword', (req, res) => {

});

// @route   POST /auth/forgotUsername
// @desc    retrieve username for the user
// @access  Private
router.post('/forgotUsername', (req, res) => {

});

module.exports = router;
