var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
  name: String,
  county: String,
  content: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Comment', commentSchema);