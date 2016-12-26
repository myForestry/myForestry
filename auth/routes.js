const data = require('./service/data');
const Business = require('./model/business');

module.exports = function(app, config) {

  app.post('/auth', function(req,res) {
    let creds = req.body;
    Business.find({userName: creds.userName, password: creds.password}, (err,data) => {
      if (err) console.log(err);
      if (data.length > 0)
        console.log(data);
    });
  });

  app.get('/auth', function(req,res) {
    if (config.environment === "DEV") {
      res.json({server: 'auth'});
    }
  });

  app.get('/auth/:admin', (req,res) => {
    const admin = data.adminLogin('admin', 'password');
    if (admin) {
      res.send(admin);
    } else {
      res.send({status: false, message: "incorrect credentials"});
    }
  });

};
