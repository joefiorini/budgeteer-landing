import { resolve, join } from 'path';
import cssnext from 'postcss-cssnext';
import autoreset from 'postcss-autoreset';
import lost from 'lost';
import webpack from 'webpack';
import WebpackIsomorphicToolsPlugin from 'webpack-isomorphic-tools/plugin';
import isomorphicToolsConfig from './webpack-isomorphic-tools-config';

require('dotenv').config();

const { HOST = '0.0.0.0', BUILD_SERVER_PORT = 8001 } = process.env;
const serverAddress = `http://${HOST}:${BUILD_SERVER_PORT}/`;

const webpackIsomorphicToolsPlugin =
  new WebpackIsomorphicToolsPlugin(isomorphicToolsConfig)
  .development();

module.exports = {
  context: resolve(join(__dirname, '../src'))
, entry:
    { app:
      [ 'react-hot-loader/patch'
      , `webpack-hot-middleware/client?path=${serverAddress}__webpack_hmr`
      , 'webpack/hot/only-dev-server'
      , './'
      ]
    }
, target: 'web'
, devtool: 'source-map'
, output:
    { path: resolve('./dist')
    , filename: 'bundle.js'
    , hash: true
    , publicPath: serverAddress
    }
, module:
    { loaders:
      [ { test: /\.js$/, loader: 'babel', query: { babelrc: true } }
      , { test: webpackIsomorphicToolsPlugin.regular_expression('style_modules')
        , loader: `style!css?modules&importLoaders=1
                   &localIdentName=[name]__[local]___[hash:base64:5]!postcss`
        }
      ]
    }
, plugins:
    [ new webpack.EnvironmentPlugin(Object.keys(process.env))
    , new webpack.HotModuleReplacementPlugin()
    , webpackIsomorphicToolsPlugin
    ]
, devServer:
    { url: `http://${HOST}:${BUILD_SERVER_PORT}`
    , host: HOST
    , port: BUILD_SERVER_PORT
    }
  , postcss:
  () => [ cssnext, autoreset({ reset: 'initial' }), lost ]
};
