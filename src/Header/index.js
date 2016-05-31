import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';
import { Logo, Smartphone, Laptop } from '../Icons';
import styles from './styles.css';

const { object } = PropTypes;

export default function Header({ theme }) {
  return (
    <section className={styles.background}>
      <section className={classnames(theme.container, styles.container)}>
        <Link className={theme.titleLink} to="/">
          <h1 className={theme.title}>Budgeteer</h1>
        </Link>
        <section className={theme.icons}>
          <Smartphone className={theme.icon} />
          <Laptop className={theme.icon} />
        </section>
        <Logo className={theme.logo} />
        <h2 className={theme.headline}>
          Finally, a budgeting app that works with YOUR pay schedule!
        </h2>
      </section>
    </section>
  );
}

Header.propTypes =
  { theme: object
  };
