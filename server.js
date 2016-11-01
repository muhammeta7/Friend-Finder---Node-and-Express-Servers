// Dependencies
var bodyParser = require('body-parser');
var path = require('path');
var express = require('express');

var app = express();
var PORT = process.env.PORT || 3000;

// Starts server and listens for connection
app.listen(PORT, function () {
  console.log('App listening on PORT: ' + PORT);
});

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// var mysql = require('mysql')
// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root", //Your username
//   password: "Paswerd7?2790", //Your password
//   database: "friendsDB"
// });
// Connecting the mysql database mentioned above
// connection.connect(function (err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   }
//   console.log('connected as id ' + connection.threadId);
// });

// Router
require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);