var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');

var app = express();

var dashboard = require('./dashboard/index')(app);
var preferences = require('./preferences/index');
var login = require('./login/index');

app.use('/', dashboard);
app.use('/preferences', preferences);
app.use('/login', login);

app.listen(3000);
app.set('view engine', 'jade');

module.exports = app;
