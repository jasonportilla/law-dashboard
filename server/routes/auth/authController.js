const express = require('express');
const router = express.Router();
const login = require('./auth');

//Testing MySQL Connection
router.get('/', (req, res) => {
	login.getLogin(function (err, loginValues) {
		if (err) {
			console.log(err);
			return res.status(403).send('User unauthorized');
		} else {
			res.status(200).send(loginValues);
		}
	});
});

// @route   POST /auth/login
// @desc    login user to application
// @access  Private
router.post('/login', (req, res) => {

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