import React from 'react';
import classes from './Button.module.scss';

export const Button = ({
  children,
  clicked,
  success,
  danger,
  primary,
  type,
}) => {
  const buttonClasses = [];
  buttonClasses.push(classes.Button);

  if (!!danger) buttonClasses.push(classes.Danger);
  if (!!success) buttonClasses.push(classes.Success);
  if (!!primary) buttonClasses.push(classes.Primary);

  return (
    <button onClick={clicked} className={buttonClasses.join(' ')} type={type}>
      {children}
    </button>
  );
};
