import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';
import EventEmitter from 'events';
import getTheme from './themes';

const emitter = new EventEmitter();

global.emit = emitter.emit.bind(emitter);

emitter.once('onThemeChange', theme => doRender(theme));

const root = document.querySelector('main');

function doRender(theme) {
  const themeName = getTheme(theme, global.location.query || {});

  render(
    <AppContainer><App theme={themeName} /></AppContainer>,
    root
  );
}

doRender();

if (module.hot) {
  /* eslint-disable global-require */
  require('extract-text-webpack-plugin/hotModuleReplacement');
  module.hot.accept('./App', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./App').default;
    render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      root
    );
  });
  /* eslint-enable global-require */
}
