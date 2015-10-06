'use strict';

var jwt 	= require('jsonwebtoken'),
	config	= require('./config'),
	path	= require('path');

module.exports = function (app) {

	app.use('/api/authenticate', require('./authenticate'));

	app.use(function(req, res, next) {

		var token = req.body.token || req.param('token') || req.headers['x-access-token'];

		if (token) {
			jwt.verify(token, config.secret, function(err, decoded) {
				if (err) {
					return res.status(403).send({
						sucess : false,
						message : 'Failed to authenticate token.'
					});
				} else {
					req.decoded = decoded;
					next();
				}
			});
		} else {
			next();
			/*
			return res.status(403).send({
				success: false,
				message: 'No token provided.'
			});
			*/
		}
	});

	app.get('/me', function(req, res) {
		res.send(req.decoded);
	});

	app.use('/api/users', require('./user'));
	

	app.use('*', function(req, res) {
		res.sendFile(path.join(config.root + '/public/index.html'));
	});

};