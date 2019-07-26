var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name:  String,
  age: String,
  password: String
});

module.exports = mongoose.model('User',userSchema,'user')