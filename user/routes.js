const request = require('request');
const data = require('./service/data');

module.exports = function(app, config) {

  app.get('/users', function(req,res) {
    const prom = data.getBusinesses();
    prom.then(function(data) {
      res.send(data);
    });
  });

  app.get('/user/:id', function(req,res) {
    res.json({user: req.params});
  });

  app.post('/user/new', function(req, res) {
    const token = req.headers['authorization'];
    const authServer = 'http://localhost:' + config.port + '/auth/:' + token;

    request(authServer, function(err,rs,body) {
      // -1 error, 0 unauthorized, 1 user, 2 admin
      if (err) {
          console.log(err);
          // return -1;
      }
      const jsonBody = JSON.parse(body);
      if (jsonBody.authenticated) {
          if (jsonBody.admin) {
            data.addBusiness(req.body)
            res.status(200).send('Account has been added.');
          } else {
            res.status(401).send('Credentials were not authorized');
          }
      } else {
          res.status(403);
      }
    });
  });

}
