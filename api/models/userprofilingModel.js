'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema({
  name: {
    type: String,
    required: 'user name'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'profiled']
    }],
    default: ['pending']
  },
  rank: {
    type: int,
    default: 0
  }
});

module.exports = mongoose.model('user', userSchema);