import React from 'react';
import 'babel-polyfill';
import { renderToString } from 'react-dom/server';
import { RouterContext, match } from 'react-router';
import Express from 'express';

import routes from '../src/routes';

const server = new Express();

global.optimizelyProps = {};

const gaTag = `<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-79840063-1', 'auto');
  ga('send', 'pageview');

</script>`;

const optimizelyTag = '<script src="https://cdn.optimizely.com/js/6292400459.js"></script>';

const includeIntegration = (name, tag, enabled) => (enabled.includes(name) ? tag : '');

const template = ({ assets, assetsHost, enabledIntegrations }) => content => `
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
    ${includeIntegration('optimizely', optimizelyTag, enabledIntegrations)}
    ${includeIntegration('googleAnalytics', gaTag, enabledIntegrations)}
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

function getEnabledIntegrations() {
  const integrations =
    [ 'optimizely'
    , 'googleAnalytics'
    ];

  // Converts optimizely to OPTIMIZELY or googleAnalytics to GOOGLE_ANALYTICS
  const toEnvVar = name => name.replace(/([a-z])([A-Z])/, '$1_$2').toUpperCase();
  const isEnvEnabled = int => process.env[`${toEnvVar(int)}_ENABLED`];

  return integrations.filter(int => isEnvEnabled(int));
}

export const runServer = (
  { host
  , port
  , assets
  , assetsHost
  }) => {
  server.listen(port, host, () => console.log(`Running on port ${port}`));
  const enabledIntegrations = getEnabledIntegrations();
  const renderTemplate = template({ host, port, assets, assetsHost, enabledIntegrations });

  server.get('*', run({ renderTemplate, assets }));
};
