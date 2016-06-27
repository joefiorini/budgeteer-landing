import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';
import EventEmitter from 'events';
import getTheme from './themes';
import mkDebug from 'debug';
import parseUrl from 'url-parse';

const debug = mkDebug('budgeteer-landing');

const emitter = new EventEmitter();

global.emit = emitter.emit.bind(emitter);

const root = document.querySelector('main');

function doRender({ theme, AppComponent = App } = {}) {
  const url = parseUrl(global.location.href, true);
  const themeName = getTheme(theme, url.query);
  debug(`Loaded theme ${themeName}`);

  render(
    <AppContainer><AppComponent theme={themeName} /></AppContainer>,
    root
  );
}

emitter.once('onThemeChange', theme => doRender({ theme }));

doRender();

if (module.hot) {
  /* eslint-disable global-require */
  require('extract-text-webpack-plugin/hotModuleReplacement');
  module.hot.accept('./App', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const AppComponent = require('./App').default;
    doRender({ AppComponent });
  });
  /* eslint-enable global-require */
}
