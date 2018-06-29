var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var bcrypt = require('bcrypt');
var mongoose = require('mongoose').set('debug', true);
var chalk = require('chalk');

// Models
var User = require('./models/User');

var app = express(); // express construct

var db_url = 'mongodb://localhost/chat';
var port = process.env.PORT || 8080;

app.use(session({
  secret: process.env.SECRET || "CHANGE_THIS",
  saveUninitialized: true,
  resave: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(morgan('dev'));

// database connection
var db = mongoose.connect(db_url);

var db_test = mongoose.connection;
db_test.on('error', console.error.bind(console, 'connection error:'));
db_test.once('open', function() {
  console.log('Mongo Connection: ' + chalk.green('GOOD'));
});

// TODO: sort alphabetically
app.use(require('./routes/user'));
app.use(require('./routes/team'));

app.get('*', (req, res) => {
  res.send('chatserver');
});

app.listen(port);