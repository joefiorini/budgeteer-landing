import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './layout';
import Landing from './Landing';

const Routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Landing} />
  </Route>
);

export default Routes;
