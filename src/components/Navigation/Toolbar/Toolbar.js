import React from 'react';
import classes from './Toolbar.module.css';
import { Logo } from '../../Logo/Logo';
import { NavigationItems } from '../NavigationItems/NavigationItems';
import {DrawerToggle} from "../SideDrawer/DrawerToggle/DrawerToggle";

export const Toolbar = ({ openMenu }) => (
  <header className={classes.Toolbar}>
    <DrawerToggle click={openMenu}/>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);
