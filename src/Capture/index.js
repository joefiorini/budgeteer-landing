import React from 'react';
import * as themes from '../themes';
import { Header } from '../containers';
import styles from './styles.css';
import CaptureMessage from '../CaptureMessage';
import CaptureForm from './Form';

export default function Capture() {
  const theme = themes.centered;

  return (
    <section className={theme.container}>
      <Header theme={theme.header} />
      <CaptureMessage theme={theme.captureMessage} />
      <CaptureForm />
    </section>
  );
}
