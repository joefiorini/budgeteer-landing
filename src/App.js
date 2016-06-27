import React, { Component, PropTypes } from 'react';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

const { object } = PropTypes;

export default class App extends Component {
  getChildContext() {
    return { theme: this.props.theme };
  }

  render() {
    return <Router history={browserHistory} routes={routes} />;
  }
}

App.childContextTypes = {
  theme: object
};

App.propTypes =
{ theme: object
};
