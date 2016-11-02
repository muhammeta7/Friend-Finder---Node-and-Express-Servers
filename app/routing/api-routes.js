//a POST routes /api/friends that handles incoming survey results. Handles compatibility with other friends
var friendList = require('../data/friends.js');

module.exports = function(app){
 
  //a GET route that displays JSON of all possible friends
  app.get('/api/friends', function(req,res){
    res.json(friendList);
  });

  app.post('/api/friends', function(req,res){
    var newUserScores = req.body.scores;
    var scoresArray = [];
    var bestMatch = 0;

    // loop through current friend list
    for(var i=0; i<friendList.length; i++){
      var scoreDiff = 0;
      for(var j=0; j<newUserScores.length; j++){
        scoreDiff += (Math.abs(parseInt(friendList[i].scores[j])-parseInt(newUserScores[j])));
      }
      scoresArray.push(scoreDiff)
    }

    // Find best match after all friends are compared
    for (var i=0; i<scoresArray.length; i++){
      if(scoresArray[i] <= scoresArray[bestMatch]){
        bestMatch = i;
      }
    }

    // Returns best match
    var bestFriend = friendList[bestMatch];
    res.json(bestFriend);
    // pushes new submission to friendList array
    friendList.push(req.body);

  });

};