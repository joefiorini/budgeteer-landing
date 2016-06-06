import { join, dirname, resolve } from 'path';
import findup from 'findup';
import dotenv from 'dotenv';
import { runServer } from './';

// For some reason __dirname resolves to / on current centos
// server, but __filename is correct.
dotenv.config(
  { path: join(findup.sync(resolve('.'), '.env'), '.env')
  }
);

runServer(
  { host: process.env.HOST
  , port: process.env.PORT
  , assets: ['bundle.js', 'styles.css']
  , assetsHost: process.env.ASSETS_HOST
  });
