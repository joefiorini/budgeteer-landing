import WebpackIsomorphicToolsPlugin from 'webpack-isomorphic-tools/plugin';
import { resolve } from 'path';

const contextPath = resolve(__dirname, '../src');

export default (
  { webpackAssetsFilePath: `${contextPath}/webpack-assets.json`
  , webpackStatsFilePath: `${contextPath}/webpack-stats.json`
  , debug: true
  , assets:
    { style_modules:
      { extensions: [ 'css' ]
      , filter: (module, regex, options, log) => {
        if (options.development) {
          return WebpackIsomorphicToolsPlugin.style_loader_filter(module, regex, options, log);
        }

        return regex.test(module.name);
      }
      , path: (module, options, log) => {
        if (options.development) {
          return WebpackIsomorphicToolsPlugin.style_loader_path_extractor(module, options, log);
        }

        return module.name;
      }
      , parser: (module, options, log) => {
        if (options.development) {
          return WebpackIsomorphicToolsPlugin.css_modules_loader_parser(module, options, log);
        }

        return module.source;
      }
      }
    }
  });
