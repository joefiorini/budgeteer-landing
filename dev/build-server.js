import webpack from 'webpack';
import Express from 'express';
import config from './webpack.config.babel';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import { resolve, join } from 'path';
import { writeFileSync } from 'fs';

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

const statsPath = resolve(join(__dirname, '..', 'webpack-stats.json'));
const writeStatsFile = stats =>
        writeFileSync(statsPath, JSON.stringify(stats.toJson()), { encoding: 'utf-8' });

compiler.plugin('done', writeStatsFile);

app.listen(port, err => {
  if (err) {
    console.error(err);
  } else {
    console.info('==> 🚧  Webpack development server listening on port %s', port);
  }
});
