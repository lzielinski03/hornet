var path = require('path');

module.exports = {
	'port': process.env.PORT || 3000,
	'database' : 'mongodb://localhost:27017/meanmachine',
	'secret' : 'hornetSecret',
	'root' : path.normalize(__dirname + '/../')
};