import React, { PropTypes } from 'react';
import getTheme from '../themes';
import Header from '../Header';
import Benefits from './Benefits';
import CallToAction from './CallToAction';
import Banner from './Banner';

const { object } = PropTypes;

export default function Landing({ location }) {
  const theme = getTheme(location.query || {});

  return (
    <section className={theme.main}>
      <Header theme={theme.header} />
      <Benefits theme={theme.benefits} />
      <Banner theme={theme.banner} callouts={theme.callouts}/>
      <CallToAction theme={theme.callToAction} />
    </section>
  );
}

Landing.propTypes =
{ location: object
};
