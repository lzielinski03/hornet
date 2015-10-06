var express		= require('express'),
	app     	= express()
	bodyParser	= require('body-parser'),
	morgan		= require('morgan'),
	mongoose	= require('mongoose'),
	config		= require('./app/config');

app.use(bodyParser.urlencoded({extended : true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Methods', 'X-Requested-Width,content-Type, Authorization');
	next();
});

app.use(morgan('dev'));

mongoose.connect(config.database);

app.use(express.static(config.root + '/public'));

require('./app/routes')(app);

app.listen(config.port);
console.log('Magic happens on port ' + config.port);