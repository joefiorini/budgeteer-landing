import React from 'react';
import { renderToString } from 'react-dom/server';
import { RouterContext, match } from 'react-router';
import Express from 'express';

import routes from '../src/routes';

const server = new Express();

const findJsAssets = ({ javascript }) => assets.filter(asset => asset.endsWith('.js'));
const pluckStyles = ({ assets }) => Object.keys(assets).map(assetKey => assets[assetKey]._style)

//         <style>
//         ${pluckStyles(assets)}
// </style>
const template = ({ host, port, assets }) => content => `
<html>
  <head>
  </head>
  <body>
    <main>${content}</main>
    <script src="${assets.javascript.app}"></script>
  </body>
</html>
`;

const run = ({ renderTemplate, webpackIsomorphicTools }) => (req, res) => {
  if (webpackIsomorphicTools.options.development) {
    webpackIsomorphicTools.refresh();
  }

  match(
    { routes
    , location: req.url
    },
    (error, redirectLocation, renderProps) => {
      if (error) {
        res.status(500).send(error.message);
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      } else if (renderProps) {
        // You can also check renderProps.components or renderProps.routes for
        // your "not found" component or route respectively, and send a 404 as
        // below, if you're using a catch-all route.
        res.status(200).send(renderTemplate(renderToString(<RouterContext {...renderProps} />)));
      } else {
        res.status(404).send('Not found');
      }
    }
  );
};

export const runServer = (
  { host
  , port
  , webpackIsomorphicTools
  }) => {
  server.listen(port, host, () => console.log(`Running on port ${port}`));
  const renderTemplate = template({ host, port, assets: webpackIsomorphicTools.assets() });

  server.get('*', run({ renderTemplate, webpackIsomorphicTools }));
};

export const addMiddleware = middleware => server.use(middleware);

