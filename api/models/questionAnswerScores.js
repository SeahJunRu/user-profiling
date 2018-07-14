'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var scoreSchema = new Schema({
  question: {
    type: String,
  },
  answer: {
    type: int,
  },
  score: {
	  type: int
});

module.exports = mongoose.model('score', scoreSchema);