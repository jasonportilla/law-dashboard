
module.exports = (sequelize, DataTypes) => {
	var Firm = sequelize.define('Firm', {
		firmName: DataTypes.STRING,
		uuid: DataTypes.UUID,
	}, {});
	Firm.associate = function(models) {
		// Firm hasMany Users
		Firm.hasMany(models.User);
	};
	return Firm;
};
