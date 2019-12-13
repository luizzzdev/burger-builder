import React from 'react';
import classes from './Modal.module.scss';
import { Backdrop } from '../Backdrop/Backdrop';
import { Aux } from '../../../hoc/Aux/Aux';
import PropTypes from 'prop-types';

export const Modal = ({ children, show, closed }) => (
  <Aux>
    <Backdrop show={show} clicked={closed} />
    <div
      className={classes.Modal}
      style={{
        transform: show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: show ? 1 : 0,
      }}
    >
      {children}
    </div>
  </Aux>
);

Modal.propTypes = {
  show: PropTypes.bool,
  closed: PropTypes.func,
};
