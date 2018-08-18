const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const { User, Firm } = require('../../models');

// Hooks the JWT Strategy
const hookJWTStrategy = passport => {
	const options = {};

	options.secretOrKey = process.env.AUTH_SECRET;
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
