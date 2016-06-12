import dotenv from 'dotenv';
import { resolve, join } from 'path';
import { readFileSync } from 'fs';
import waitOn from 'wait-on';
import config from '../server/webpack.config.babel';
import { runServer } from '../server';

const statsPath = resolve(join(__dirname, '..', 'webpack-stats.json'));

dotenv.config();

let running = false;

waitOn(
  { resources: [ statsPath ]
  },
  err => {
    if (err) {
      console.error('Unkown error while waiting for webpack-stats.json');
      console.error(err);
      process.exit(1);
    }

    const stats = readFileSync(statsPath, { encoding: 'utf-8' });

    if (running) return;

    const { assetsByChunkName } = JSON.parse(stats);

    runServer(
      { host: process.env.HOST || 'localhost'
      , port: process.env.PORT || 8000
      , assets: assetsByChunkName.app
      , assetsHost: 'http://localhost:8001'
      });

    running = true;
  });
