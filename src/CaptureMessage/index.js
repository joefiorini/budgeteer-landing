import React, { PropTypes } from 'react';
import styles from './styles.css';
import classnames from 'classnames';

const { object } = PropTypes;
const MESSAGE =
  `We’re working hard to get Budgeteer ready for you. We are making great progress;
  look forward to the best budgeting experience soon. If you’d like us to send you
  a reminder when we’re ready, just put your email in below:`;

export default function CaptureMessage({ theme }) {
  return (
    <section className={classnames(theme.container, styles.container)}>
      <h3 className={classnames(theme.header, styles.header)}>
        Hey there, early adopter!
      </h3>
      <p className={styles.body}>
        {MESSAGE}
      </p>
    </section>
  );
}

CaptureMessage.propTypes =
  { theme: object
  };
