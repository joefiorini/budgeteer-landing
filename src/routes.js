import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './layout';

const Welcome = () => <h2>Welcome</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const Login = () => <h2>Login</h2>;

const Routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Welcome} />
    <Route path="dashboard" component={Dashboard} />
    <Route path="login" component={Login} />
  </Route>
);

export default Routes;
