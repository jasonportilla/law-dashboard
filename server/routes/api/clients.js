const express = require('express');
const router = express.Router();
const passport = require('passport');

//Load User model
const Client = require('../../models/Client');

//Load input Validation
const validateClientInput = require('../../validation/clients');

// @route   GET api/client-profile
// @desc    Get clients
// @access  Private
router.get(
	'/',
	passport.authenticate('jwt', { session: false }),
	(req, res) => {
		Client.find()
			.then(profile => {
				res.json(profile);
			})
			.catch(err => res.status(404).json(err));
	}
);

// @route   GET api/client-profile/:id
// @desc    Get client by id
// @access  Private
router.get(
	'/:id',
	passport.authenticate('jwt', { session: false }),
	(req, res) => {
		Client.findById(req.params.id)
			.then(client => {
				res.json(client);
			})
			.catch(err => res.status(404).json({ noclientfound: 'No client was found'}));
	}
);


// @route   POST api/client-profile
// @desc    Create or edit client profile
// @access  Private
router.post(
	'/add-client',
	passport.authenticate('jwt', { session: false }),
	(req, res) => {
		const { errors, isValid } = validateClientInput(req.body);

		// Check Validation
		if (!isValid) {
			// Return any errors with 400 status
			return res.status(400).json(errors);
		}

		// Get fields
		const profileFields = {};
		profileFields.user = req.user.id;
		if (req.body.firstName) profileFields.firstName = req.body.firstName;
		if (req.body.lastName) profileFields.lastName = req.body.lastName;
		if (req.body.email) profileFields.email = req.body.email;
		if (req.body.courtCaseNumber) profileFields.courtCaseNumber = req.body.courtCaseNumber;
		if (req.body.phoneNumber) profileFields.phoneNumber = req.body.phoneNumber;
		if (req.body.caseAmount) profileFields.caseAmount = req.body.caseAmount;
		if (req.body.caseDivision) profileFields.caseDivision = req.body.caseDivision;
		if (req.body.judge) profileFields.judge = req.body.judge;
		if (req.body.courtroom) profileFields.courtroom = req.body.courtroom;
		if (req.body.county) profileFields.county = req.body.county;

		Client.findOne({ user: req.user.id }).then(profile => {
			if (profile) {
				// Update
				Client.findOneAndUpdate(
					{ user: req.user.id },
					{ $set: profileFields },
					{ new: true }
				).then(profile => res.json(profile));
			} else {
				// Save Profile
				new Client(profileFields).save().then(profile => res.json(profile));
			}
		});
	}
);

// @route   POST api/client-profile/address
// @desc    Add address to client profile
// @access  Private
router.post(
	'/address',
	passport.authenticate('jwt', { session: false }),
	(req, res) => {
	
		Client.findOne({ user: req.user.id }).then(profile => {
			const newAddress = {
				street: req.body.street,
				city: req.body.city,
				state: req.body.state,
				zipcode: req.body.zipcode,
			};

			// Add to address array
			profile.address.unshift(newAddress);

			profile.save().then(profile => res.json(profile));
		});
	}
);

module.exports = router;