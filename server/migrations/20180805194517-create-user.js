const bcrypt = require('bcryptjs');

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('users', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			uuid: {
				type: Sequelize.UUID,
				allowNull: false,
				defaultValue: Sequelize.UUIDV4,
			},
			FirmId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'Firms',
					key: 'id',
				},
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
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('users');
	},
};
