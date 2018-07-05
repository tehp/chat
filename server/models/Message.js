var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var messageSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  message: {
    type: String,
    required: true
  },
  created: Date
});

messageSchema.pre('save', function(next) {
  if (!this.created) {
    this.created = new Date();
  }
  next();
});

module.exports = mongoose.model('Message', messageSchema);