'use strict';
var mongoose = require('mongoose');
// var autoIncrement = require("mongodb-autoincrement");
// mongoose.plugin(autoIncrement.mongoosePlugin);


var QnScoringSchema = new mongoose.Schema({
  qnType: {
    type: String,
    required: 'Kindly enter the type of qn',
    enum: ['savings','loan']
  },
  option: {
    type: String,
    required: 'Kindly enter the option' 
  },
  score: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('QnScoring', QnScoringSchema);