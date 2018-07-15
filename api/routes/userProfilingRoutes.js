'use strict';
module.exports = function(app) {
  var userProfiling = require('../controllers/userProfilingController');

  // userProfiling Routes
  app.route('/submitanswers')
    //.get(userProfiling.setDB)
    .post(userProfiling.submit_answers);

};
