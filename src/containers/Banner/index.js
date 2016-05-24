import React from 'react';
import { object } from 'react/lib/ReactPropTypes';
import Callout from '../../Callout';
import { CoinDollar } from '../../Icons';
import classnames from 'classnames';
import styles from './styles.css';

export default function Banner({ theme }) {
  const containerClasses = classnames(theme.container, styles.container);

  return (
  <section className={styles.outer}>
    <section className={containerClasses}>
      <CoinDollar className={styles.coin} />
      <Callout className={styles.callout} text="No more forced monthly budgeting schedules" />
      <Callout
        className={styles.callout}
        text="Communicate when it’s convenient for you"
      />
    </section>
  </section>
  );
}

Banner.propTypes =
  { theme: object
  };
