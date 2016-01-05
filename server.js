'use strict';

var express = require('express');
var config = require('./config');
var os = require('os');

var app = express();
app.use(express.static('public'));


app.get('/config', function (req, res) {
    res.json(config.client || {});
});

app.get('/server', function(req,res) {
  res.json({ 'pid': process.pid, platform: os.platform() });
});

var server = app.listen(config.port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});