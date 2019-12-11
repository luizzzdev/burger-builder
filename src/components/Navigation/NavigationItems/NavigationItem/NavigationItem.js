import React from 'react';
import classes from './NavigationItem.module.scss';
import { NavLink } from 'react-router-dom';

export const NavigationItem = ({ children, link, active }) => (
  <li className={classes.NavigationItem}>
    <NavLink exact activeClassName={classes.active} to={link}>
      {children}
    </NavLink>
  </li>
);
