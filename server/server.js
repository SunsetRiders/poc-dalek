var express = require('express'),
  path = require('path');

// @server
var app = express();

// @index route
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/../client/index.html'));
});

console.log("@server is running on port 8080");
console.log("> visit http://localhost:8080");

app.listen(8080);
