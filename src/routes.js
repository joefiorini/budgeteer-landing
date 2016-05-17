import React from 'react';
import {Route, IndexRoute} from 'react-router';


const App = ({children}) => <main><h1>Hello!</h1>{children}</main>;
const Welcome = () => <h2>Welcome</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const Login = () => <h2>Login</h2>;

const Routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Welcome}/>
    <Route path="dashboard" component={Dashboard}/>
    <Route path="login" component={Login}/>
  </Route>
);

export default Routes;
