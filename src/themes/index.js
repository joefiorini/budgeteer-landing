import * as centered from '../themes/centered';
import * as left from '../themes/left';

const themes =
  { centered
  , left
  };

export default (query) =>
  themes[query.theme || global.optimizelyProps.theme || process.env.DEFAULT_THEME];
