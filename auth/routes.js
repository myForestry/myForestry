const data = require('./service/data');
const enc = require('./service/encrypt');
const JWT = require('jwt-async');

module.exports = function(app, config) {

  app.get('/auth', function(req,res) {
    if (config.environment === "DEV") {
      res.json({server: 'auth'});
    }
  });

  app.post('/auth/login', function(req,res) {

    let creds = req.body;
    const jwt = new JWT();
    jwt.setSecret(config.api.auth.secret);

    creds.password = enc.encrypt(creds.password.toString());
    const result = data.find({userName: creds.userName, password: creds.password});
    
    result.then(function(data) {
      const dt = new Date();
      jwt.sign({
        timeStamp: dt,
        userName: creds.userName
      }, function(err,token) {
        console.log(token);
        res.json({
          authenticated: data,
          token: token
        });
      });

    }, function(err) {
      res.json({authenticated: err});
    })
  });

  app.post('/auth/create-user', function(req,res) {
    let user = req.body;

  });

};
