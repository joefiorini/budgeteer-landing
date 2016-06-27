import React, { PropTypes } from 'react';
import Header from '../Header';
import CaptureMessage from './CaptureMessage';
import CaptureForm from './Form';

const { object } = PropTypes;

export default function Capture(props, { theme }) {
  return (
    <section className={theme.container}>
      <Header theme={theme.header} />
      <CaptureMessage theme={theme.captureMessage} />
      <CaptureForm />
    </section>
  );
}

Capture.contextTypes =
  { theme: object
  };
