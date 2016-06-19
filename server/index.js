import React from 'react';
import { renderToString } from 'react-dom/server';
import { RouterContext, match } from 'react-router';
import Express from 'express';

import routes from '../src/routes';

const server = new Express();

global.optimizelyProps = {};

const template = ({ host, port, assets, assetsHost }) => content => `
<html>
  <head>
    <link href="https://fonts.googleapis.com/css?family=Lato:400,300|Muli|Kameron" rel="stylesheet" type="text/css">
    ${assets.filter(file => file.endsWith('.css')).map(stylesheet =>
      `<link rel='stylesheet' type='text/css' href='${assetsHost}/${stylesheet}'>`)}
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script>
      window.optimizelyProps = {};
    </script>
  </head>
  <body>
    <main>${content}</main>
    <script src="${assetsHost}/${assets.filter(file => file.endsWith('.js'))}"></script>
  </body>
</html>
`;

const run = ({ renderTemplate }) => (req, res) => {
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
  , assets
  , assetsHost
  }) => {
  server.listen(port, host, () => console.log(`Running on port ${port}`));
  const renderTemplate = template({ host, port, assets, assetsHost });

  server.get('*', run({ renderTemplate, assets }));
};
