import React, { PropTypes } from 'react';
import styles from './styles.css';

const { node } = PropTypes;

export default function Layout({ children }) {
  return (
    <section>
      <h1 className={styles.heading}>Budgeteer</h1>
      {children}
    </section>
  );
}

Layout.propTypes =
{ children: node
};
