import { join, dirname } from 'path';
import findup from 'findup';

// const resolve = require('path').resolve;

// require('babel-register')(
//   { babelrc: resolve('../.babelrc')
//   }
// );

// For some reason __dirname resolves to / on current centos
// server, but __filename is correct.
require('dotenv').config(
  { path: join(findup.sync(dirname(__filename), '.env'), '.env')
  }
);

const server = require('./');
server.runServer({ host: process.env.HOST, port: process.env.PORT, assets: ['bundle.js', 'styles.css'], assetsHost: process.env.ASSETS_HOST });
