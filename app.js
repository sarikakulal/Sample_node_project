var express = require('express');
var app = express();

//get method
app.get('/', function (req, res) {
  res.send('Hello World!');
});

//listen port
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});