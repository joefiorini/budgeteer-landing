import React from 'react';
import * as themes from '../themes';
import { Header, Benefits, CallToAction, Banner } from '../containers';

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
