import React, { PropTypes } from 'react';
import Header from '../Header';
import Benefits from './Benefits';
import CallToAction from './CallToAction';
import Banner from './Banner';
import getTheme from '../themes';

const { object } = PropTypes;

export default function Landing(props, { theme = getTheme(null, props.location.query) }) {
  return (
    <section className={theme.main}>
      <Header theme={theme.header} />
      <Benefits theme={theme.benefits} />
      <Banner theme={theme.banner} callouts={theme.callouts} />
      <CallToAction theme={theme.callToAction} />
    </section>
  );
}

Landing.propTypes =
{ location: object
};

Landing.contextTypes =
{ theme: object
};
