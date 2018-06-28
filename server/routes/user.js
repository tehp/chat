var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var bcrypt = require('bcrypt');
var mongoose = require('mongoose');

// Models
var User = require('../models/User');
var Response = require('../models/Response');

var router = express.Router();

router.post('/user', (req, res) => {

  var user = new User({
    username: req.body.username,
    password: req.body.password,
    logins: 0
  });

  user.save(err => {
    if (err) {
      return res.json(new Response({
        success: false,
        message: 'User creation failed.'
      }));
    } else {
      return res.json(new Response({
        success: true,
        message: 'User created successfully.'
      }));
    }
  });

});

module.exports = router;