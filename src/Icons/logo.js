import React, { Component } from 'react';
import SvgIcon from './SvgIcon';
import logo from './logo.svg';

console.log(logo);
export default SvgIcon(
  { displayName: 'Logo'
  })(logo);
