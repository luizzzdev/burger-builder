import React from 'react';
import classes from './BuildControls.module.scss';
import { BuildControl } from './BuildControl/BuildControl';
import PropTypes from 'prop-types';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

export const BuildControls = ({
  addIngredient,
  removeIngredient,
  disabled,
  price,
  purchasable,
  ordered,
}) => (
  <div className={classes.BuildControls}>
    <p>
      Currente price: <strong>{price.toFixed(2)}</strong>
    </p>
    {controls.map(control => (
      <BuildControl
        disabled={disabled[control.type]}
        key={control.label}
        label={control.label}
        type={control.type}
        addIngredient={() => addIngredient(control.type)}
        removeIngredient={() => removeIngredient(control.type)}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!purchasable}
      onClick={ordered}
    >
      ORDER NOW
    </button>
  </div>
);

BuildControls.propTypes = {
  addIngredient: PropTypes.func.isRequired,
  removeIngredient: PropTypes.func.isRequired,
};
