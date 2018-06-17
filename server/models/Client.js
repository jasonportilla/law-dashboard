const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ClientSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'users'
	},
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	email: {
		type: String,
		lowercase: true
	},
	courtCaseNumber: {
		type: String
	},
	phoneNumber: {
		type: String,
	},
	caseAmount: {
		type: Number,
		get: getPrice,
		set: setPrice
	},
	caseDivision: {
		type: String
	},
	judge: {
		type: String
	},
	courtroom: {
		type: String
	},
	county: {
		type: String
	},
	address: {
		street: {
			type: String
		},
		city: {
			type: String
		},
		state: {
			type: String
		},
		zipcode: {
			type: String
		}
	},
	date: {
		type: Date,
		default: Date.now
	}
});

function getPrice(num) {
	return (num / 100).toFixed(2);
}

function setPrice(num) {
	return num * 100;
}

module.exports = Client = mongoose.model('clients', ClientSchema);