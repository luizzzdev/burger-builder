import React from 'react';
import PropTypes from 'prop-types';
import classes from './Input.module.scss';

export const Input = props => {
  let InputElement;

  switch (props.inputtype) {
    case 'textarea':
      InputElement = <textarea className={classes.InputElement} {...props} />;
      break;
    default:
      InputElement = <input className={classes.InputElement} {...props} />;
      break;
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {InputElement}
    </div>
  );
};

Input.propTypes = {
  onInput: PropTypes.func,
  label: PropTypes.string,
  inputtype: PropTypes.string,
};
