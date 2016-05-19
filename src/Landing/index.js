import React from 'react';
import * as themes from '../themes';
import { Header, Benefits, CallToAction, Callouts } from '../containers';

export default () => {
  console.log(themes);
  const theme = themes.centered;
  return (
    <section className={theme.container}>
      <Header styles={theme.header} />
      <Benefits styles={theme.benefits} />
      <CallToAction styles={theme.callToAction} />
      <Callouts styles={theme.callouts} />
    </section>
  );
}
