import React, { PropTypes } from 'react';

const { object, string } = PropTypes;

export default function Callout({ theme, text }) {
  return (
    <h4 className={theme.callout}>{text}</h4>
  );
}

Callout.propTypes =
{ theme: object
, text: string
};
