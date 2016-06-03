import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './styles.css';
import classnames from 'classnames';

const { object } = PropTypes;

export default function CallToAction({ theme }) {
  return (
    <section className={theme.container}>
      <h3
        className={classnames(theme.heading, styles.heading)}
      >
        Are you ready to reclaim the time and money to do more of what you love?
      </h3>
      <Link
        to="/sign-up"
        className={classnames(theme.button, styles.button)}
      >
        Sign Me Up!
      </Link>
    </section>
  );
}

CallToAction.propTypes =
  { theme: object
  };
