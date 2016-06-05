import webpack from 'webpack';
import StatsPlugin from 'stats-webpack-plugin';
import config from '../server/webpack.config.babel';

const { HOST = '0.0.0.0', BUILD_SERVER_PORT = 8001 } = process.env;

export default {
  ...config
  , entry:
      { app:
        [ 'react-hot-loader/patch'
        , `webpack-hot-middleware/client?path=${config.output.publicPath}__webpack_hmr`
        , 'webpack/hot/only-dev-server'
        , './'
        ]
      }
  , plugins:
    [ ...config.plugins
    , new webpack.HotModuleReplacementPlugin()
    , new StatsPlugin('../src/webpack-stats.json')
    ]
  , devServer:
  { url: `http://${HOST}:${BUILD_SERVER_PORT}`
  , host: HOST
  , port: BUILD_SERVER_PORT
  }
}
