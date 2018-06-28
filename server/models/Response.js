var mongoose = require('mongoose');

var responseSchema = new mongoose.Schema({
  success: {
    type: Boolean,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  created: Date
});

responseSchema.pre('save', function(next) {
  if (!this.created) {
    this.created = new Date();
  }
});

module.exports = mongoose.model('Response', responseSchema);