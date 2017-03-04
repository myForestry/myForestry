'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _colors = require('colors');

var _colors2 = _interopRequireDefault(_colors);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _login = require('./login/login');

var _login2 = _interopRequireDefault(_login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Configure app
var app = (0, _express2.default)();

// Import modules


// eslint-disable-next-line

app.set('port', 9000);
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));

app.listen(app.get('port'), function () {
    var id = process.pid;
    // eslint-disable-next-line
    console.log('Process '.green + id + ' running on port: '.green + app.get('port'));

    // connect to the database
    _mongoose2.default.Promise = global.Promise;
    _mongoose2.default.connect('mongodb://localhost/myForestry');
    _mongoose2.default.connection.once('connected', function () {
        // eslint-disable-next-line
        console.log(id + ' connected to myForestry mongooseDB'.dim);
    });
});

// initialize modules
(0, _login2.default)(app);

// serve client for dev env
// if process.env.NODE_ENV === 'development' ?
app.get('/', function (req, res) {
    res.sendFile('../../public');
});