import React from 'react';
import { Logo } from '../../Logo/Logo';
import { NavigationItems } from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import { Backdrop } from '../../UI/Backdrop/Backdrop';
import { Aux } from '../../../hoc/Aux/Aux';

export const SideDrawer = ({ show, closed }) => {
  const sideDrawerClasses = [classes.SideDrawer];
  sideDrawerClasses.push(show ? classes.Open : classes.Close);

  return (
    <Aux>
      <Backdrop show={show} clicked={closed} />
      <div className={sideDrawerClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};
