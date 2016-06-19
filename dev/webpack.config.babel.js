import webpack from 'webpack';
import config from '../server/webpack.config.babel';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const { HOST = '0.0.0.0', BUILD_SERVER_PORT = 8001 } = process.env;

process.env.NODE_ENV = 'development';

export default {
  ...config
  , output:
    { ...config.output
    , filename: 'bundle.js'
    , hash: false
    }
  , entry:
      { app:
        [ 'react-hot-loader/patch'
        , `webpack-hot-middleware/client?path=${config.output.publicPath}__webpack_hmr`
        , 'webpack/hot/only-dev-server'
        , ...config.entry.app
        ]
      }
  , plugins:
  [   ...config.plugins.filter(plugin => !(plugin instanceof ExtractTextPlugin))
    , new ExtractTextPlugin('styles.css')
    , new webpack.HotModuleReplacementPlugin()
    ]
  , devServer:
  { url: `http://${HOST}:${BUILD_SERVER_PORT}`
  , host: HOST
  , port: BUILD_SERVER_PORT
  }
}
