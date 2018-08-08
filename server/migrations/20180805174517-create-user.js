const bcrypt = require('bcryptjs');

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Users', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			firstName: {
				type: Sequelize.STRING,
				allowNull: false,
				trim: true,
			},
			lastName: {
				type: Sequelize.STRING,
				allowNull: false,
				trim: true,
			},
			username: {
				type: Sequelize.STRING,
				unique: true,
				allowNull: false,
				trim: true,
			},
			email: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true,
			},
			password: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		},
		{
			hooks: {
				beforeValidate: hashPassword,
			},
		},
		{
			instanceMethods: {
				comparePasswords,
			},
		}
		);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Users');
	},
};

function comparePasswords(password, callback) {
	bcrypt.compare(password, this.password, (error, isMatch) => {
		if (error) {
			return callback(error);
		}
		return callback(null, isMatch);
	});
}

// Hashes the password for user Object
function hashPassword(user) {
	if (user.changed('password')) {
		return bcrypt.hash(user.password, 10)
			.then(password => {
				user.password = password;
			});
	}
}
