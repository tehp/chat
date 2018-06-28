var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var messageSchema = new mongoose.Schema({
  sender: {
    type: ObjectId,
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
});

module.exports = mongoose.model('Message', messageSchema);