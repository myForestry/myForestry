'use strict';

var _token = require('../services/token.service');

var _token2 = _interopRequireDefault(_token);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports.authenticate = function (req) {
    return _token2.default.authenticate(req);
};