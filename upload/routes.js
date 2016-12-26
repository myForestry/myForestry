module.exports = function(app, config) {
  app.get('/upload', function(req,res) {
    res.json({server: 'upload'})
  });
};
