import React from 'react';
import styles from './styles.css';
import classnames from 'classnames';

export default ({ theme }) => (
    <section className={theme.container}>
      <h3 className={classnames(theme.heading, styles.heading)}>Are you ready to reclaim the time and money to do more of what you love?</h3>
      <button className={styles.button}>Sign Me Up!</button>
    </section>
);
