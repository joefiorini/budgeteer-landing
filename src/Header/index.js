import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Logo, Smartphone, Laptop } from '../Icons';

const { object } = PropTypes;

export default function Header({ theme }) {
  return (
    <section className={theme.container}>
      <Link className={theme.titleLine} to="/">
        <h1 className={theme.title}>Budgeteer</h1>
        <Smartphone className={theme.icon} />
        <Laptop className={theme.icon} />
      </Link>
      <Logo />
      <h2 className={theme.headline}>
        Finally, a budgeting app that works with YOUR pay schedule!
      </h2>
    </section>
  );
}

Header.propTypes =
  { theme: object
  };
