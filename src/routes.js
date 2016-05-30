import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './Layout';
import Landing from './Landing';
import Capture from './Capture';

const Routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Landing} />
    <Route path="sign-up" component={Capture} />
  </Route>
);

export default Routes;
