import webpack from 'webpack';
import Express from 'express';
import config from './webpack.config.babel';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const { host, port } = config.devServer;

const compiler = webpack(config);
const app = new Express();

app.use(webpackDevMiddleware(compiler,
                             { publicPath: `${config.output.publicPath}`
                             , contentBase: `http://${host}:${port}`
                             , hot: true
                             , inline: true
                             , stats: { colors: true }
                             }));

app.use(webpackHotMiddleware(compiler));

const { HOST, PORT } = process.env;

app.listen(port, err => {
  if (err) {
    console.error(err);
  } else {
    console.info('==> 🚧  Webpack developments sserver listening on port %s', port);
  }
});
/* let running = false;
 * 
 * compiler.plugin('done',
 *                 stats => {
 *                   if (running) return;
 * 
 *                   const { assetsByChunkName } = stats.toJson();
 * 
 *                   runServer(
 *                     { host: config.devServer.host
 *                     , port: config.devServer.port
 *                     , assets: assetsByChunkName.app
 *                     });
 * 
 *                   running = true;
 *                 });*/
