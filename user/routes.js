const ctrl = require('./controller/userController');

module.exports = function(app, config) {

  ctrl.init(config);

  app.get('/users/all', function(req,res) {
    ctrl.allBusinesses().then(function(data) {
      res.send(data);
    });
  });

  app.get('/users/:id', function(req,res) {
    ctrl.findBusiness(req.params.id).then(function(data) {
      res.send(data);
    }).catch(function() {
      res.status(404).send("User not found");
    });
  });

  app.post('/users/new', function(req, res) {
    const token = req.headers['authorization'];
    ctrl.checkToken(token).then(function(data) {
      if (data === 2) {
        ctrl.saveBusiness(req.body).then(function(data) {
          res.status(200).send("User added.");
        });
      } else {
        res.status(403).send("Not Authorized");
      }
    });
  });

  app.post('/users/update', function(req,res) {
    const token = req.headers['authorization'];
    ctrl.checkToken(token).then(function(data) {
      if (data === 2) {
        ctrl.updateBusiness(req.body).then(function(data) {
          res.status(200).send("User updated");
        });
      } else {
        res.status(403).send("Not Authorized");
      }
    });
  });

}
