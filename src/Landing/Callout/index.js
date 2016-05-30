import React, { PropTypes } from 'react';
import { object, string } from 'react/lib/ReactPropTypes';

export default function Callout({ className, text }) {
  return (
    <h4 className={className}>{text}</h4>
  );
}

Callout.propTypes =
{ className: string
, text: string
};
