'use strict';

var _crypto = require('../../common/services/crypto.service');

var _crypto2 = _interopRequireDefault(_crypto);

var _user = require('../models/user.stub');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports.login = function (req) {
    var data = req.body;
    if (data.userName && data.password) {
        data.password = _crypto2.default.encrypt(data.password.toString());
        _user2.default.findOne({ userName: data.userName, password: data.password }).exec(function (err, user) {
            if (err) throw Error(err);else return Promise.resolve(user);
        });
    } else return Promise.reject('Missing credentials');
};