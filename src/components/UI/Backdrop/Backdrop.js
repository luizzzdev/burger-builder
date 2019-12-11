import React from 'react';
import classes from './Backdrop.module.scss';

export const Backdrop = ({ show, clicked }) => {
  return show ? (
    <div className={classes.Backdrop} onClick={clicked}></div>
  ) : null;
};
