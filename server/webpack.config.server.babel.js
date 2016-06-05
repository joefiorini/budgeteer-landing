import config from './webpack.config.babel';
import webpack from 'webpack';
import { readdirSync } from 'fs';
import { resolve, join } from 'path';
import { chmodSync } from 'fs';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

let nodeModules = {};
readdirSync(resolve(__dirname, '../node_modules'))
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

class ExecutableOutputPlugin {
  constructor(options) {
    this.options = options;
  }

  markExecutables(stats) {
    const { options } = stats.compilation;
    const { output: { path, filename } } = options;

    chmodSync(join(path, filename), '0755');
  }

  apply(compiler) {
    compiler.plugin('done', (stats) => this.markExecutables(stats));

    if (this.options.processor) {
      new webpack.BannerPlugin(`#!${this.options.processor}`, { raw: true, entryOnly: true }).apply(compiler);
    }
  }
}

export default
  { ...config
  , entry: '../server/boot.js'
  , output:
    { path: './bin'
    , filename: 'budgeteer-landing'
    }
  , plugins:
    // TODO: Find a better way to disable ExtractTextPlugin here
    [ ...config.plugins.filter(plugin => !(plugin instanceof ExtractTextPlugin))
    , new webpack.BannerPlugin('require("source-map-support").install();',
                              { raw: true, entryOnly: false })
    , new ExecutableOutputPlugin({ processor: ['/usr/bin/env node'] })
    , new ExtractTextPlugin('styles.css', { disable: true })
    ]
  , target: 'node'
  , externals: nodeModules
  };
