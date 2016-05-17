import React from 'react';
import { renderToString } from 'react-dom/server'  
import { RouterContext, match } from 'react-router'
import createMemoryHistory from 'history/lib/createMemoryHistory';
import Express from 'express';

import routes from '../src/routes'

const server = new Express();

export const addMiddleware = middleware => server.use(middleware);

export const runServer = ({host, port}) => {
  server.listen(port, () => console.log(`Running on port ${port}`));

  server.get('*', run);
}

export const run = (req, res) => {
  match(
    { routes,
      location: req.url,
    },
    (error, redirectLocation, renderProps) => {
      if (error) {
        res.status(500).send(error.message);
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search)
      } else if (renderProps) {
        // You can also check renderProps.components or renderProps.routes for
        // your "not found" component or route respectively, and send a 404 as
        // below, if you're using a catch-all route.
        res.status(200).send(renderToString(<RouterContext {...renderProps} />))
      } else {
        res.status(404).send('Not found')
      }
    }
  );

};

