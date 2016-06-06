const resolve = require('path').resolve;

require('babel-register')(
  { babelrc: resolve('../.babelrc')
  }
);

require('./boot');
