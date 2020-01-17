var express = require('express');
var bodyParser = require('body-parser');
var api = require('./routes')
var app = express();

app.use(bodyParser.json({limit: '100mb'}));
app.use(bodyParser.urlencoded({ extended: false, limit: '100mb' }));

app.use('/*',function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, LOCK, UNLOCK, OPTIONS");
  next();
});

app.use('/',api);
app.listen(8081, function () {
  console.log('server working in 8081 port...')
});
