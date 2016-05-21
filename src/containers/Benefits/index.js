import React, { PropTypes } from 'react';
import styles from './styles.css';
import classnames from 'classnames';

const { object, string, number } = PropTypes;

const benefits =
  [ { title: 'Get paid'
    , description: 'Whether this happens once a month, once a week or somewhere in between Budgeteer can work for you'
    }
  , { title: 'Assign every dollar to a goal'
    , description: 'Cure impulsive spending with realistic thinking; put everything towards your goals to make sure you achieve them'
    }
  , { title: 'Track your expenses'
    , description: 'Securely connect your bank accounts to assign expenses to goals with a single button'
    }
  , { title: 'Communicate on your own schedule'
    , description: 'Flag items, leaves notes or questions for others to respond to when it’s convenient for them'
    }
  ];

const Benefit = ({ title, description, counter, className }) => (
  <li className={className}>
    <svg viewBox="0 0 63 63" width="63" height="63">
      <circle className={styles.bullet} cx="31" cy="31" r="31" />
      <text x="50%" y="50%" textAnchor="middle" className={styles.counter}>{counter}</text>
    </svg>
    <p className={styles.title}>{title}</p>
    <p className={styles.description}>{description}</p>
  </li>
);

Benefit.propTypes =
  { title: string
  , description: string
  , className: string
  , counter: number
  };

export default function Benefits({ theme }) {
  const classes = classnames(theme.benefit, styles.item);

  return (
    <section className={theme.container}>
      <ol className={styles.list}>
        {benefits.map((benefit, index) => <Benefit key={benefit.title} className={classes} {...benefit} counter={index + 1} />)}
      </ol>
    </section>
  );
}

Benefits.propTypes =
  { theme: object
  };
