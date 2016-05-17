require('babel-register');
require('dotenv').config();

const server = require('./');
server.runServer({ host: process.env.HOST, port: process.env.PORT });
