const Validator = require('validator');
const _ = require('lodash');

module.exports = function validateClientInput(data) {
	let errors = {};

	data.firstName = !_.isEmpty(data.firstName) ? data.firstName : '';
	data.lastName = !_.isEmpty(data.lastName) ? data.lastName : '';

	if(Validator.isEmpty(data.firstName)) {
		errors.firstName = 'First Name field is required';
	}
	if(Validator.isEmpty(data.lastName)) {
		errors.lastName = 'Last Name field is required';
	}
	
	return {
		errors,
		isValid: _.isEmpty(errors)
	};
};