import React, { PropTypes } from 'react';
import styles from './styles.css';

const { node } = PropTypes;

export default function Layout({ children }) {
  return (
    <section className={styles.container}>
      {children}
    </section>
  );
}

Layout.propTypes =
{ children: node
};
