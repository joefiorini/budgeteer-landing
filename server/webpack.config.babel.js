import { resolve, join } from 'path';
import cssnext from 'postcss-cssnext';
import autoreset from 'postcss-autoreset';
import values from 'postcss-modules-values';
import lost from 'lost';
import pxtorem from 'postcss-pxtorem';
import webpack from 'webpack';

require('dotenv').config();

const { HOST = '0.0.0.0', BUILD_SERVER_PORT = 8001 } = process.env;
const serverAddress = `http://${HOST}:${BUILD_SERVER_PORT}/`;

export default {
  context: resolve(join(__dirname, '../src'))
, target: 'web'
, devtool: 'source-map'
, output:
    { path: resolve('./dist')
    , hash: true
    , publicPath: serverAddress
    }
, module:
    { loaders:
      [ { test: /\.js$/, loader: 'babel', query: { babelrc: true } }
      , { test: /\.svg$/
        , loader: 'svg!svgo'
        }
        , { test: /\.css$/
        , loader: `style!css?modules&importLoaders=1
                   &localIdentName=[name]__[local]___[hash:base64:5]!postcss`
        }
      ]
    }
, plugins:
    [ new webpack.EnvironmentPlugin(Object.keys(process.env))
    // , new webpack.HotModuleReplacementPlugin()
    ]
  , postcss:
  () => [ cssnext, lost, pxtorem({ propWhiteList: [] }), values ]
};
