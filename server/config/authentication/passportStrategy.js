const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const config = require('../keysLocal');

const User = require('../../models/User');

// Hooks the JWT Strategy
const hookJWTStrategy = passport => {
	const options = {};

	options.secretOrKey = config.keys.secret;
	options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
	options.ignoreExpiration = false;

	passport.use(new JWTStrategy(options, (JWTPayload, callback) => {
		User.findOne({ where: { username: JWTPayload.username } })
			.then(user => {
				if (!user) {
					callback(null, false);
					return;
				}
				callback(null, user);
			});
	}));
};

module.exports = hookJWTStrategy;
