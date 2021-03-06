import React from 'react';
import classes from './NavigationItems.module.scss';
import { NavigationItem } from './NavigationItem/NavigationItem';

export const NavigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/">Burger Builder</NavigationItem>
    <NavigationItem link="/orders">Orders</NavigationItem>
    <NavigationItem link="/auth">Auth</NavigationItem>
  </ul>
);
