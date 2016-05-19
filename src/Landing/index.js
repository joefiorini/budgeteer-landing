import React from 'react';
import * as themes from '../themes';
import { Header, Benefits, CallToAction, Callouts } from '../containers';

export default () => {
  console.log(themes);
  const theme = themes.centered;
  return (
    <section className={theme.container}>
      <Header theme={theme.header} />
      <Benefits theme={theme.benefits} />
      <CallToAction theme={theme.callToAction} />
      <Callouts theme={theme.callouts} />
    </section>
  );
}
