// setup //
var express = require('express');
var app = express();
var port    = process.env.PORT || 3000;
var routes = require('./config/routes');

// dependencies //
var cors = require('cors');
var bodyParser = require('body-parser');
// var path = require('path');
// var logger = require('morgan');


// middleware //
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(routes); 
app.use(express.static(__dirname + '/public'));
// app.use(logger('dev'));



// start server
app.listen(port, function() {
	console.log("listening on " + port);
});





