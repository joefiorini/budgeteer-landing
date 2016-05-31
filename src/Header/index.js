import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';
import { Logo, Smartphone, Laptop } from '../Icons';
import styles from './styles.css';

const { object } = PropTypes;

export default function Header({ theme }) {
  const mergeStyles = className => classnames(theme[className], styles[className]);

  return (
    <section className={styles.background}>
      <section className={mergeStyles('container')}>
        <Link className={mergeStyles('titleLink')} to="/">
          <h1 className={mergeStyles('title')}>Budgeteer</h1>
        </Link>
        <section className={theme.icons}>
          <Smartphone className={styles.icon} />
          <Laptop className={styles.icon} />
        </section>
        <Logo className={theme.logo} />
        <h2 className={mergeStyles('headline')}>
          Finally, a budgeting app that works with YOUR pay schedule!
        </h2>
      </section>
    </section>
  );
}

Header.propTypes =
  { theme: object
  };
