
module.exports = (sequelize, DataTypes) => {
	var Firm = sequelize.define('Firm', {
		firmName: DataTypes.STRING,
		uuid: {
			type: DataTypes.UUID,
			allowNull: false,
			defaultValue: DataTypes.UUIDV4,
		},
	}, {});
	Firm.associate = function(models) {
		// Firm hasMany Users
		Firm.hasMany(models.User);
	};
	return Firm;
};
