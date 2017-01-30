var express = require('express');
var app = express();
var db = require('./db');

// Middleware
var bodyParser = require('body-parser');
var cors = require('cors');
var session = require('express-session'); // Can we use this with AuthO?
var path = require('path');
var morgan = require('morgan');

// Pass middleware into express
app.use(morgan('dev')); // Log messages for development
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors()); // Sets headers

// Serve the client files CHANGE FILE PATH BASED ON WHAT JOEY / JEREMY ADD
app.use('/compiled', express.static('compiled'))
app.use('/node_modules', express.static(path.join(__dirname, '../node_modules')));
app.use(express.static(path.join(__dirname, '../public')));

// Set what we are listening on.
app.set('port', 3000);

// Set up our routes
require('./routes.js')(app, express);




// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on port', app.get('port'));
}

module.exports.app = app;