import React from 'react';
import classes from './Ingredient.module.scss';
import PropTypes from 'prop-types';

const INGREDIENT_TYPES = {
  breadTop: () => (
    <div className={classes.BreadTop}>
      <div className={classes.Seeds1} />
      <div className={classes.Seeds2} />
    </div>
  ),
  breadBottom: () => <div className={classes.BreadBottom} />,
  meat: () => <div className={classes.Meat} data-testid="meat" />,
  cheese: () => <div className={classes.Cheese} data-testid="cheese" />,
  salad: () => <div className={classes.Salad} data-testid="salad" />,
  bacon: () => <div className={classes.Bacon} data-testid="bacon" />,
};

export const Ingredient = ({ type }) => {
  const IngredientType = INGREDIENT_TYPES[type];
  return <IngredientType />;
};

Ingredient.propTypes = {
  type: PropTypes.oneOf(Object.keys(INGREDIENT_TYPES)).isRequired,
};
