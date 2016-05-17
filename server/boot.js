require('babel-register');
require('dotenv').config();

var server = require('./');
server.runServer({ host: process.env.HOST, port: process.env.PORT });
