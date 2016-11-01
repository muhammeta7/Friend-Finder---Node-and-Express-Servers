//a POST routes /api/friends that handles incoming survey results. Handles compatibility with other friends
var friendList = require('../data/friends.js');

module.exports = function(app){
  //a GET route that displays JSON of all possible friends
  app.get('/api/friends', function(req,res){
    res.json(friendList);
  });

  app.post('/api/friends', function(req,res){
    friendList.push(req.body);
  });
};