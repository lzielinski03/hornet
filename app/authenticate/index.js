'use strict';
var express 	= require('express'),
	controller	= require('./authenticate.controller'),
	router		= express.Router();

router.post('/', controller.authenticate);

module.exports = router;