'use strict';
module.exports = function(app) {
  var userProfiling = require('../controllers/userprofilingController');

  // user profiling Routes
  app.route('/submit_profile')
    .post(userProfiling.rank_a_user);

};