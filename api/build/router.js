'use strict';

var _auth = require('./auth/auth.controller');

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (app) {
    app.post('/api/login', function (req, res) {
        var creds = req.body;
        console.log(creds);
        res.json({ status: 200 });
    });
};