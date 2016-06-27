import webpack from 'webpack';
import { resolve } from 'path';
import config from '../config/webpack.config.babel';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const { HOST = '0.0.0.0', BUILD_SERVER_PORT = 8001 } = process.env;
const serverAddress = `http://${HOST}:${BUILD_SERVER_PORT}/`;

process.env.NODE_ENV = 'development';

export default {
  ...config
  , output:
    { path: resolve('./dist')
    , filename: 'bundle.js'
    , publicPath: serverAddress
    }
  , entry:
      { app:
        [ 'react-hot-loader/patch'
        , `webpack-hot-middleware/client?path=${serverAddress}__webpack_hmr`
        , 'webpack/hot/only-dev-server'
        , './'
        ]
      }
  , plugins:
    [ ...config.plugins.filter(plugin => !(plugin instanceof ExtractTextPlugin))
    , new ExtractTextPlugin('styles.css')
    , new webpack.HotModuleReplacementPlugin()
    ]
  , devServer:
  { url: `http://${HOST}:${BUILD_SERVER_PORT}`
  , host: HOST
  , port: BUILD_SERVER_PORT
  }
}
