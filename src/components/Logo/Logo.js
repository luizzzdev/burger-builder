import React from 'react';
import logo from '../../assets/images/burger-logo.png';
import classes from './Logo.module.scss';

export const Logo = props => (
  <div className={classes.Logo}>
    <img src={logo} alt="Burguer" />
  </div>
);
