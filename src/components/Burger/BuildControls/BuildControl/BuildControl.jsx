import React from 'react';
import classes from './BuildControl.module.css';

export const BuildControl = ({
  label,
  addIngredient,
  removeIngredient,
  disabled,
}) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{label}</div>
    <button
      className={classes.Less}
      onClick={removeIngredient}
      disabled={disabled}
    >
      Less
    </button>
    <button className={classes.More} onClick={addIngredient}>
      More
    </button>
  </div>
);
