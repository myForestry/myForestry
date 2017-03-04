'use strict';

var _jwtAsync = require('jwt-async');

var _jwtAsync2 = _interopRequireDefault(_jwtAsync);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = JSON.parse(_fs2.default.readFileSync('../config.json'));

module.exports.createToken = function (body) {
    var jwt = new _jwtAsync2.default();
    jwt.setSecret(config.secret);

    var dateTime = new Date();
    jwt.sign({
        timeStamp: dateTime,
        userName: body.userName,
        admin: body.admin
    }, function (err, tok) {
        if (err) return Promise.reject('Error signing token', err);else {
            return tok;
        }
    });
};

module.exports.unsignToken = function (token) {
    var jwt = new _jwtAsync2.default();
    jwt.setSecret(config.secret);

    jwt.verify(token, function (err, data) {
        if (err) return Promise.reject(err);else return data;
    });
};