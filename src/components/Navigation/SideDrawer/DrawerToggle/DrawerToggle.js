import React from 'react';
import classes from './DrawerToggle.module.scss';

export const DrawerToggle = ({ click }) => (
  <div onClick={click} className={classes.DrawerToggle}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);
