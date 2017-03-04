const multer = require('multer');

const storage = multer.diskStorage({ //multers disk storage settings
        destination: function (req, file, cb) {
            cb(null, './files/')
        },
        filename: function (req, file, cb) {
            var datetimestamp = Date.now();
            cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1])
        }
    });

const upload = multer({ //multer settings
                    storage: storage
                }).single('file');

module.exports = function(app, config, apiProxy) {

  app.post('/upload', function(req,res) {
    upload(req,res,function(err) {
      if (err) res.status(500).send('Error uploading file.');
      else {
        res.status(200).send('File uploaded.');
      }
    });
  });

  app.get('/upload', (req,res) => {
    res.json({status: 'OK'});
  })

};
