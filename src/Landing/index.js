import React from 'react';
import * as themes from '../themes';
import { Header, Benefits, CallToAction } from '../containers';
import Callout from '../Callout';

export default () => {
  const theme = themes.centered;
  return (
    <section className={theme.container}>
      <Header theme={theme.header} />
      <Benefits theme={theme.benefits} />
      <Callout theme={theme.callout} text="No more forced monthly budgeting schedules" />
      <Callout
        theme={theme.callout}
        text="Communicate about your money when it’s convenient for you"
      />
      <CallToAction theme={theme.callToAction} />
    </section>
  );
};
