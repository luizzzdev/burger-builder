import React from 'react';
import classes from './BuildControl.module.scss';

export const BuildControl = ({
  label = '',
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
      data-testid={'less-' + label.toLowerCase()}
    >
      Less
    </button>
    <button
      className={classes.More}
      onClick={addIngredient}
      data-testid={'more-' + label.toLowerCase()}
    >
      More
    </button>
  </div>
);
