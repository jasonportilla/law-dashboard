const { comparePasswords, hashPassword } = require('../utils/helperFunctions');

const modelOptions = {
	instanceMethods: {
		comparePasswords,
	},
	hooks: {
		beforeValidate: hashPassword,
	},
};

module.exports = (sequelize, DataTypes) => {
	var User = sequelize.define('User', {
		uuid: {
			type: DataTypes.UUID,
			allowNull: false,
			defaultValue: DataTypes.UUIDV4,
		},
		firstName: DataTypes.STRING,
		lastName: DataTypes.STRING,
		username: DataTypes.STRING,
		email: DataTypes.STRING,
		password: DataTypes.STRING,
	}, modelOptions);
	User.associate = function(models) {
		// User belongsTo Firm
		User.belongsTo(models.Firm);
	};
	return User;
};