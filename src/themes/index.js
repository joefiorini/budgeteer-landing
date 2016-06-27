import * as centered from '../themes/centered';
import * as left from '../themes/left';

const themes =
  { centered
  , left
  };

export default (maybeTheme, query) =>
  themes[maybeTheme || query.theme || process.env.DEFAULT_THEME];
