import React from 'react';
import classes from './NavigationItem.module.css';

export const NavigationItem = ({ children, link, active }) => (
  <li className={classes.NavigationItem}>
    <a href={link} className={active ? classes.active : null}>
      {children}
    </a>
  </li>
);
