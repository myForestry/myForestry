'use strict';

var _jwtAsync = require('jwt-async');

var _jwtAsync2 = _interopRequireDefault(_jwtAsync);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _crypto = require('./crypto.service');

var _crypto2 = _interopRequireDefault(_crypto);

var _user = require('../models/user.model');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = JSON.parse(_fs2.default.readFileSync('../config.json'));

module.exports.authenticate = function (req) {
    if (req.body.password && req.body.userName) {
        req.body.password = _crypto2.default.enc(req.body.password);
        _user2.default.find({ userName: req.body.userName, password: req.body.password }).then(function (data) {
            var jwt = new _jwtAsync2.default();
            jwt.setSecret(config.secret);

            var dateTime = new Date();
            jwt.sign({
                timeStamp: dateTime,
                userName: data.userName,
                admin: data.admin
            }, function (err, tok) {
                if (err) return Promise.reject('Error signing token');else {
                    return Promise.resolve(tok);
                }
            });
        }).catch(function (err) {
            return Promise.reject(err);
        });
    }
};