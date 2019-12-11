import React from 'react';
import classes from './Button.module.css';

export const Button = ({ children, clicked, success, danger }) => {
  const buttonClasses = [];
  buttonClasses.push(classes.Button);

  if (!!danger) buttonClasses.push(classes.Danger);
  if (!!success) buttonClasses.push(classes.Success);

  return (
    <button onClick={clicked} className={buttonClasses.join(' ')}>
      {children}
    </button>
  );
};
