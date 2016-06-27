import { resolve, join } from 'path';
import cssnext from 'postcss-cssnext';
import values from 'postcss-modules-values';
import lost from 'lost';
import pxtorem from 'postcss-pxtorem';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import StatsPlugin from 'stats-webpack-plugin';

const dotenvPath = resolve(__dirname, '../.env');

require('dotenv').config(
  { path: dotenvPath
  });

process.env.NODE_ENV = 'production';

export default {
  context: resolve(join(__dirname, '../src'))
, target: 'web'
, devtool: 'sourcemap'
, module:
    { loaders:
      [ { test: /\.js$/, loader: 'babel', query: { babelrc: true } }
      , { test: /\.svg$/
        , loader: 'svg!svgo'
        }
      , { test: /\.css$/
        , loader: ExtractTextPlugin.extract('null', `css?modules&importLoaders=1
              &localIdentName=[name]__[local]___[hash:base64:5]!postcss`)
        }
      ]
    }
, plugins:
    [ new ExtractTextPlugin('styles.[hash].css')
    , new StatsPlugin('../webpack-stats.json')
    , new webpack.EnvironmentPlugin(Object.keys(process.env))
    ]
  , postcss:
  () => [ cssnext, lost, pxtorem({ propWhiteList: [] }), values ]
};
