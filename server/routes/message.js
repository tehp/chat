var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var bcrypt = require('bcrypt');
var mongoose = require('mongoose');

// Models
var User = require('../models/User');
var Response = require('../models/Response');
var Message = require('../models/Message');

var router = express.Router();

router.get('/message', (req, res) => {
  Message.find({}, function(err, messages) {
    res.send(messages);
  });
});

router.post('/message', (req, res) => {

  var message = new Message({
    sender: req.body.sender,
    message: req.body.message
  });

  message.save(err => {
    if (err) {
      console.log(err);
      return res.json(new Response({
        success: false,
        message: 'Message creation failed.'
      }));
    } else {
      return res.json(new Response({
        success: true,
        message: 'Message created successfully.'
      }));
    }
  });

});

module.exports = router;