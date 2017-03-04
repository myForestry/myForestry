'use strict';

var _auth = require('./controllers/auth.controller');

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (app) {
    app.post('/api/login', function (req, res) {
        // authController.authenticate(req).then((data) => {
        //     res.send(data);
        // }, (err) => {
        //     res.send(err);
        // });
    });
};