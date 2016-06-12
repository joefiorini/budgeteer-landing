import { join, dirname, resolve } from 'path';
import findup from 'findup';
import dotenv from 'dotenv';
import { runServer } from './';
import { readFileSync } from 'fs';

// For some reason __dirname resolves to / on current centos
// server, but __filename is correct.
dotenv.config(
  { path: join(findup.sync(resolve('.'), '.env'), '.env')
  }
);

const basePath = resolve(__dirname, '../src');
const statsPath = resolve(join(basePath, '..', 'webpack-stats.json'));

const stats = readFileSync(statsPath, { encoding: 'utf-8' });

const { assetsByChunkName } = JSON.parse(stats);


runServer(
  { host: process.env.HOST
  , port: process.env.PORT
  , assets: assetsByChunkName.app
  , assetsHost: process.env.ASSETS_HOST
  });
