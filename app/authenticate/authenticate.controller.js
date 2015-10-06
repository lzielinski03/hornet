'use strict';
var jwt 		= require('jsonwebtoken'),
	superSecret = 'hornetSecret',
	User 		= require('./../user/user.model');

module.exports.authenticate = function (req, res) {

	User.findOne({
		username : req.body.username
	}).select('name username password').exec(function(err, user) {

		if (err) throw err;

		if (!user) {
			res.json({
				sucess : false,
				message: 'Authentication failed. User not found.'
			})
		} else if (user) {

			var validPassword = user.comparePassword(req.body.password);
			if (!validPassword) {
				res.json({
					sucess : false,
					message : 'Authentication failed. Wrong password.'
				});
			} else {
				var token = jwt.sign({
					name : user.name,
					username : user.username
				}, superSecret, {
					expireInMinutes : 1440
				});

				res.json({
					sucess : true,
					message : 'Enjoy your token!',
					token : token
				});
			}
		}
	});
};