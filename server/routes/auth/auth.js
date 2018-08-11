const login = require('../../config/authentication/passportStrategy');

//This is the get function that is called by the controller
exports.getLogin = function (done) {
	// User.findAll().then(users => {
	// 	done(null, users);
	// });
};

exports.accessCode = () => {
	let text = '';
	const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	for (var i = 0; i < 7; i++)
		text += possible.charAt(Math.floor(Math.random() * possible.length));

	return text;
};
