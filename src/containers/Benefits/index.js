import React from 'react';
import styles from './styles.css';

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

const Benefit = ({ title, description }) => (
    <li>
    <p className={styles.title}>{title}</p>
    <p className={styles.description}>{description}</p>
    </li>
);
export default ({theme}) => {
  return (
    <section className={theme.container}>
      <ol>
        {benefits.map(benefit => <Benefit {...benefit} />)}
      </ol>
    </section>
  );
};
