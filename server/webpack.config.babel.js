import { resolve } from 'path';
import config from '../config/webpack.config.babel';

const serverAddress = `http://${process.env.ASSETS_HOST}/`;

export default {
  ...config
, entry:
    { app:
      [ './'
      ]
    }
, output:
  { path: resolve('./dist')
  , filename: 'bundle.[hash].js'
  , hash: true
  , publicPath: serverAddress
  }
};
