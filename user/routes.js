module.exports = function(app, config) {

  app.get('/users', function(req,res) {
    res.json({users: 'all'});
  });

  app.get('/user/:id', function(req,res) {
    res.json({user: req.params});
  });
  
};
