var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  created: Date,
  logins: Number,
});

userSchema.pre('save', function(next) {
  var user = this;
  // new user gets current created at day
  if (!this.created) {
    this.created = new Date();
  }
  bcrypt.genSalt(8, (e, salt) => {
    if (e) return next(e);
    // creates hash with generated salt and stores it in password field
    bcrypt.hash(user.password, salt, (err, hash) => {
      user.password = hash;
      next();
    });
  });
});

module.exports = mongoose.model('User', userSchema);