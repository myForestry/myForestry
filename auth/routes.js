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
        userName: creds.userName,
        admin: data.admin
      }, function(err,token) {
        res.json({
          authenticated: true,
          token: token
        });
      });

    }, function(err) {
      res.json({authenticated: err});
    })
  });


// ============== private routes ================= //
  app.get('/:token', function(req,res) {
    const token = req.params.token;
    const jwt = new JWT();
    jwt.setSecret(config.api.auth.secret);

    jwt.verify(token, function(err,data) {
      if (err) {
        res.json({
          authenticated: false,
          message: 'Failed to authenticate user'
        });
      } else {
        res.json({
          authenticated: true,
          admin: data.claims.admin
        });
      }
    });

  });

  app.post('/encrypt', function(req,res) {
    const unencrypted = req.body.data;
    const encr = enc.encrypt(unencrypted);
    res.json({encrypted: encr});
  });
// ============================================= //

};
