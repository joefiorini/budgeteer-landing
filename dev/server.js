import webpack from 'webpack';
import config from './webpack.config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import { addMiddleware, runServer } from '../server';

config.entry.app.unshift(
  `webpack-hot-middleware/client?${config.output.publicPath}/__webpack_hmr&reload=1`,
  'webpack/hot/only-dev-server'
);

config.plugins.unshift(new webpack.HotModuleReplacementPlugin());

const compiler = webpack(config);

addMiddleware(webpackDevMiddleware(compiler,
                                   { publicPath: `${config.output.publicPath}/`
                                   }));

addMiddleware(webpackHotMiddleware(compiler,
                                   { log: console.log
                                   , path: '/__webpack_hmr'
                                   , heartbeat: 10 * 1000
                                   }));

runServer(
  { host: config.devServer.host
  , port: config.devServer.port
  });

