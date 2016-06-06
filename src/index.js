import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';

const root = document.querySelector('main');
render(
  <AppContainer>< App /></AppContainer>,
  root
);

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
