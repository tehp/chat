var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var bcrypt = require('bcrypt');
var mongoose = require('mongoose');

// Models
var User = require('../models/User');
var Team = require('../models/Team');
var Response = require('../models/Response');

var router = express.Router();

router.post('/team', (req, res) => {

  var team = new Team({
    name: req.body.name,
    description: req.body.description,
    administrator: req.body.administrator
  });

  var session = req.session;

  team.save(err => {
    if (err) {
      return res.json(new Response({
        success: false,
        message: 'Team creation failed.'
      }));
    } else {
      return res.json(new Response({
        success: true,
        message: 'Team created successfully.'
      }));
    }
  });

});

module.exports = router;