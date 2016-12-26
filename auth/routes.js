const data = require('./service/data');
const enc = require('./service/encrypt');

module.exports = function(app, config) {

  app.get('/auth', function(req,res) {
    if (config.environment === "DEV") {
      res.json({server: 'auth'});
    }
  });

  app.post('/auth/login', function(req,res) {
    let creds = req.body;
    creds.password = enc.encrypt(creds.password);
    const result = data.find({userName: creds.userName, password: creds.password});
    result.then(function(data) {
      res.json({authenticated: data});
    }, function(err) {
      res.json({authenticated: err});
    })
  });

  app.post('/auth/create-user', function(req,res) {

  });

};
