exports.DATABASE_URL = process.env.DATABASE_URL ||
	global.DATABASE_URL ||
	'mongodb://phoneadmin:1wmn357@ds133814.mlab.com:33814/phone-repair';

exports.PORT = process.env.PORT || 8080;