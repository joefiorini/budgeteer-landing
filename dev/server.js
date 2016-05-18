import WebpackIsomorphicTools from 'webpack-isomorphic-tools';
import isomorphicToolsConfig from './webpack-isomorphic-tools-config';
import dotenv from 'dotenv';
import { resolve } from 'path';

const basePath = resolve(__dirname, '../src');

dotenv.config();

const webpackIsomorphicTools = new WebpackIsomorphicTools(isomorphicToolsConfig)
  .development()
  .server(basePath, () => {
    const { publicPath, assetsByChunkName } = require('../src/webpack-stats.json');

    require('../server').runServer( // eslint-disable-line global-require
      { host: process.env.HOST || 'localhost'
      , port: process.env.PORT || 8000
      , webpackIsomorphicTools
      });
    }
  );
