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
  , { title: 'Get paid again and repeat'
    , description: 'Only budget when money comes in; a lot can happen in a month and allocating more often than that lets you respond to change more easily  flexible—fix me'
    }
  ];

const Benefit = ({ title, description, className }) => (
  <article className={className}>
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.description}>{description}</p>
  </article>
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
      {benefits.map(benefit => <Benefit key={benefit.title} className={classes} {...benefit} />)}
    </section>
  );
}

Benefits.propTypes =
  { theme: object
  };
