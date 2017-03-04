'use strict';

var _login = require('./controllers/login.controller');

var _login2 = _interopRequireDefault(_login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (app) {
    app.post('/api/login', _login2.default.login);
};