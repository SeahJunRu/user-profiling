'use strict';


var mongoose = require('mongoose'),
QnScorings = mongoose.model('QnScoring');

//exports.setDB = function(req, res) {
//    var new_QnScoring = new QnScorings();
//    new_QnScoring.score = 2000;
//    new_QnScoring.option = "2";
//    new_QnScoring.qnType = "savings";
//    new_QnScoring.save(function(err, task) {
//        if (err)
//            res.send(err);
//        res.json(new_QnScoring);
//    });
//};

exports.submit_answers = function(req, res) {
  var savingsOption = req.params.savingsOption;
  var loanOption = req.params.loanOption;
  var totalScore = 0;
  var query = { qnType: "savings", option: savingsOption };
  QnScorings.find(query, function(err, qnScoring) {
    if (err)
      res.send(err);
    if (qnScoring == null) {
      res.send("Unable to find scoring for the option selected for savings.");    
    } else { 
      totalScore = qnScoring.score + totalScore;
    }
  });

  var query = { qnType: "loan", option: loanOption };
  QnScorings.find(query, function(err, qnScoring) {
    if (err)
      res.send(err);
    totalScore = qnScoring.score + totalScore;
  });
  res.send("Profile of the user is " + profile(totalScore));
};

var profile = function(totalScore) {
    // Profile A is if the score is >= 8, B for >= 6, C for >= 4, and D for >= 2.
    if (totalScore >= 8) {
        return "A";
    } else if (totalScore>=6) {
        return "B";
    } else if (totalScore>=4) {
        return "C";
    } else if (totalScore>=2) {
        return "D";
    } else {
        return "E";
    }
} 

