import React, { PropTypes } from 'react';
import Header from '../Header';
import Benefits from './Benefits';
import CallToAction from './CallToAction';
import Banner from './Banner';

const { object } = PropTypes;

export default function Landing(props, { theme }) {
  return (
    <section className={theme.main}>
      <Header theme={theme.header} />
      <Benefits theme={theme.benefits} />
      <Banner theme={theme.banner} callouts={theme.callouts} />
      <CallToAction theme={theme.callToAction} />
    </section>
  );
}

Landing.contextTypes =
{ theme: object
};
