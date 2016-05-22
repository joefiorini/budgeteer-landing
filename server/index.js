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
    <link href='https://fonts.googleapis.com/css?family=Lato:400,300|Muli|Kameron' rel='stylesheet' type='text/css'>
  </head>
  <body>
    <main>${content}</main>
    <script src="http://localhost:8001/${assets.filter(file => file.endsWith('.js'))}"></script>
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
  }) => {
  server.listen(port, host, () => console.log(`Running on port ${port}`));
  const renderTemplate = template({ host, port, assets });

  server.get('*', run({ renderTemplate, assets }));
};

export const addMiddleware = middleware => server.use(middleware);

