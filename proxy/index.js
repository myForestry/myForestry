const express = require('express');
const app = express();
const httpProxy = require('http-proxy');
const apiProxy = httpProxy.createProxyServer();
const fs = require('fs');
const configData = fs.readFileSync(__dirname + '/../config.json');
const config = JSON.parse(configData);

app.set('port', config.port);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const authPort = config.api.auth.port;
const userPort = config.api.user.port;
const uploadPort = config.api.upload.port;

app.listen(app.get('port'), () => {
  console.log('Proxy Server running on port: ' + app.get('port'));
});

const proxy = require('./routes')(app,config,apiProxy);
