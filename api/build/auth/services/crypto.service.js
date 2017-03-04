'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.encrypt = encrypt;
exports.decrypt = decrypt;

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = JSON.parse(_fs2.default.readFile('../config.json'));

function encrypt(data) {
    var cipher = _crypto2.default.createCipher('aes192', config.secret);
    var encrypted = cipher.update(data, 'utf-8', 'base64');
    encrypted += cipher.final('base64');
    return encrypted;
}

function decrypt(data) {
    var decipher = _crypto2.default.createDecipher('aes192', config.secret);
    var dec = decipher.update(data, 'base64', 'utf-8');
    dec += decipher.final('utf-8');
    return dec;
}