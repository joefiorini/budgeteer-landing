import React from 'react';
import * as themes from '../themes';
import { Header, Benefits, CallToAction } from '../containers';
import Callout from '../Callout';
import { CoinDollar } from '../Icons';

export default () => {
  const theme = themes.centered;
  return (
    <section className={theme.container}>
      <Header theme={theme.header} />
      <Benefits theme={theme.benefits} />
      <section className={theme.callout.container}>
        <CoinDollar className={theme.icon} />
        <Callout theme={theme.callout} text="No more forced monthly budgeting schedules" />
        <Callout
          theme={theme.callout}
          text="Communicate about your money when it’s convenient for you"
        />
      </section>
      <CallToAction theme={theme.callToAction} />
    </section>
  );
};
