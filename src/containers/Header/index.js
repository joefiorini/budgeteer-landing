import React from 'react';
import { Logo, Smartphone, Laptop } from '../../Icons';

export default ({ theme }) => {
  return (
    <section className={theme.container}>
      <section className={theme.titleLine}>
        <h1 className={theme.title}>Budgeteer</h1>
        <Smartphone className={theme.icon} />
        <Laptop className={theme.icon} />
      </section>
      <Logo />
      <h2 className={theme.headline}>
        Finally, a budgeting app that works with YOUR pay schedule!
      </h2>
    </section>
  );
};
