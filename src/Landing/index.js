import React from 'react';
import * as themes from '../themes';
import Header from '../Header';
import Benefits from './Benefits';
import CallToAction from './CallToAction';
import Banner from './Banner';

export default () => {
  const theme = themes.centered;
  return (
    <section className={theme.container}>
      <Header theme={theme.header} />
      <Benefits theme={theme.benefits} />
      <Banner theme={theme.banner} />
      <CallToAction theme={theme.callToAction} />
    </section>
  );
};
