var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var userSchema = mongoose.model('User');

var teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true,
  },
  administrator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  created: Date
});

teamSchema.pre('save', function(next) {
  if (!this.created) {
    this.created = new Date();
  }
  this.members.push(this.administrator);
  next();
});

module.exports = mongoose.model('Team', teamSchema);