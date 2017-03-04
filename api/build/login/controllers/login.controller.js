'use strict';

var _login = require('../services/login.service');

var _login2 = _interopRequireDefault(_login);

var _token = require('../../common/services/token.service');

var _token2 = _interopRequireDefault(_token);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports.login = function (req, res) {
    _login2.default.login(req).then(_token2.default, badLogin).then(success).catch(error);

    function success(token) {
        console.log('success');
        res.status(200).send(token);
    }

    function badLogin(err) {
        console.log(err);
        res.status(403).send('Not authorized.');
    }

    function error(err) {
        console.log('ERROR: ', err);
        res.status(401).send('There was an internal error.');
    }
};