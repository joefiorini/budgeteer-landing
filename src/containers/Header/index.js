import React from 'react';

export default ({ styles }) => {
  return (
    <section className={styles.container}>
      <p className={styles.logo}>LOGO</p>
      <h1 className={styles.title}>Budgeteer</h1>
      <h2 className={styles.headline}>Finally, a budgeting app that works with YOUR pay schedule!</h2>
    </section>
  );
}
