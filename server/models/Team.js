var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

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
    type: ObjectId,
    required: true
  },
  members: [{
    type: ObjectId,
    ref: 'User'
  }],
  created: Date
});

teamSchema.pre('save', function(next) {
  if (!this.created) {
    this.created = new Date();
  }
  this.members.push(this.administrator); // add creator as first member
});

module.exports = mongoose.model('Team', teamSchema);