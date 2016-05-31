import React from 'react';
import Header from '../Header';
import getTheme from '../themes';
import CaptureMessage from './CaptureMessage';
import CaptureForm from './Form';

export default function Capture({ location }) {
  const theme = getTheme(location.query || {});


  return (
    <section className={theme.container}>
      <Header theme={theme.header} />
      <CaptureMessage theme={theme.captureMessage} />
      <CaptureForm />
    </section>
  );
}
