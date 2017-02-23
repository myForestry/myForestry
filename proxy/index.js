const express = require('express');
const app = express();
const httpProxy = require('http-proxy');
const apiProxy = httpProxy.createProxyServer();
const fs = require('fs');
const configData = fs.readFileSync(__dirname + '/../config.json');
const config = JSON.parse(configData);

app.set('port', config.port);

const authPort = config.api.auth.port;
const userPort = config.api.user.port;
const uploadPort = config.api.upload.port;


app.get('/', (req,res) => {
  const clientServer = 'http://' + config.client.server + ':' + config.client.port;
  apiProxy.web(req,res,{target: clientServer});
});

app.all('/auth/*', (req,res) => {
  const authServer = 'http://' + config.api.auth.server + ':' + config.api.auth.port;
  apiProxy.web(req,res,{target: authServer});
});

app.all('/users/*', (req,res) => {
  const userServer = 'http://' + config.api.user.server + ':' + config.api.user.port;
  apiProxy.web(req,res,{target: userServer});
});

app.all('/upload/*', (req,res) => {
  const uploadServer = 'http://' + config.api.upload.server + ':' + config.api.upload.port;
  apiProxy.web(req,res,{target: uploadServer});
});

app.listen(app.get('port'), () => {
  console.log('Proxy Server running on port: ' + app.get('port'));
});
