const Validator = require('validator');
const _ = require('lodash');
//const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
	let errors = {};

	data.name = !_.isEmpty(data.name) ? data.name : '';
	data.email = !_.isEmpty(data.email) ? data.email : '';
	data.jobTitle = !_.isEmpty(data.jobTitle) ? data.jobTitle : '';
	data.password = !_.isEmpty(data.password) ? data.password : '';
	data.password2 = !_.isEmpty(data.password2) ? data.password2 : '';

	if(Validator.isEmpty(data.name)) {
		errors.name = 'name field is required';
	}
	if(Validator.isEmpty(data.email)) {
		errors.email = 'Email field is required';
	}
	if(Validator.isEmpty(data.jobTitle)) {
		errors.jobTitle = 'Job Title field is required';
	}
	if(!Validator.isEmail(data.email)) {
		errors.email = 'Email is invalid';
	}
	if(Validator.isEmpty(data.password)) {
		errors.password = 'Password field is required';
	}
	if(!Validator.isLength(data.password, { min: 6, max: 30})) {
		errors.password = 'Password must be at least 6 characters';
	}
	if(Validator.isEmpty(data.password2)) {
		errors.password2 = 'Confirm password field is required';
	}
	if(!Validator.equals(data.password, data.password2)) {
		errors.password2 = 'Passwords must match';
	}

	return {
		errors,
		isValid: _.isEmpty(errors)
	};
};