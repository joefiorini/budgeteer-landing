import React from 'react';
import styles from './styles.css';

const MAILCHIMP_LIST_URL =
  '//twitter.us2.list-manage.com/subscribe/post?u=4794561fabb59d7302370d2e2&amp;id=07e3457e6a';

export default function Form() {
  return (
    <form
      className={styles.container}
      action={MAILCHIMP_LIST_URL}
      method="post"
      name="mc-embedded-subscribe-form"
      target="_blank"
      noValidate
    >
      <input
        type="email"
        name="EMAIL"
        className={styles.input}
        placeholder="rick@alexandria.co"
      />
      <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
        <input
          type="text"
          name="b_4794561fabb59d7302370d2e2_07e3457e6a"
          tabIndex="-1"
        />
      </div>
      <input
        type="submit"
        value="Remind Me"
        name="subscribe"
        className={styles.button}
      />
    </form>
  );
}
