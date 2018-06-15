const Validator = require('validator');
const _ = require('lodash');

module.exports = function validateClientInput(data) {
	let errors = {};

	data.firstName = !_.isEmpty(data.firstName) ? data.firstName : '';
	data.lastName = !_.isEmpty(data.lastName) ? data.lastName : '';

	if(Validator.isEmpty(data.firstName)) {
		errors.name = 'First Name field is required';
	}
	if(Validator.isEmpty(data.lastName)) {
		errors.email = 'Last Name field is required';
	}
	if(!Validator.isEmail(data.email)) {
		errors.email = 'Email is invalid';
	}

	return {
		errors,
		isValid: _.isEmpty(errors)
	};
};