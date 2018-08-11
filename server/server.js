const app = require('./app');
var sequelize = require('sequelize');
const PORT = process.env.PORT || 5000;
const User = require('./models').User;
const Firm = require('./models').Firm;


Firm.create({
	firmName: 'Bigney Law Firm',
	uuid: sequelize.Utils.generateUUID,
}).then(firm => {
	firm.createUser({
		uuid: sequelize.Utils.generateUUID,
		firstName: 'Jason',
		lastName: 'Portilla',
		username: 'portillaj',
		email: 'jason.portilla85@gmail.com',
		password: 'port6911',
	}).then(() => console.log('worked'));
});

app.listen(PORT, function () {
	console.log(`Server is listening on port ${PORT}`);
});
