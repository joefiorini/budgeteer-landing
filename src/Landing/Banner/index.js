import React from 'react';
import { object, arrayOf, string } from 'react/lib/ReactPropTypes';
import Callout from '../Callout';
import { CoinDollar } from '../../Icons';
import classnames from 'classnames';
import styles from './styles.css';

export default function Banner({ theme, callouts }) {
  const containerClasses = classnames(theme.container, styles.container);

  return (
    <section className={styles.outer}>
      <section className={containerClasses}>
        <CoinDollar className={styles.coin} />
        {callouts.map(callout =>
          <Callout
            key={callout}
            className={styles.callout}
            text={callout}
          />)}
      </section>
    </section>
  );
}

Banner.propTypes =
  { theme: object
  , callouts: arrayOf(string)
  };
