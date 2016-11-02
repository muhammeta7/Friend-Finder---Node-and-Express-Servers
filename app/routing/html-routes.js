// Dependencies
var path = require('path');

// Routing
module.exports = function(app) {
 
  // GET route that displays home.html
  app.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
  });

  // USE route to home page
  app.use(function(req, res){
    res.sendFile(path.join(__dirname + '/../public/home.html'));
  });

};

