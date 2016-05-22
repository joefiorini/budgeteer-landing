import React from 'react';
import Logo from '../../Icons/logo';

export default ({ theme }) => {
  return (
    <section className={theme.container}>
      <Logo />
      <p className={theme.logo}>LOGO</p>
      <h1 className={theme.title}>Budgeteer</h1>
      <h2 className={theme.headline}>Finally, a budgeting app that works with YOUR pay schedule!</h2>
    </section>
  );
}
