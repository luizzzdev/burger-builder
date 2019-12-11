import React from 'react';
import classes from './Ingredient.module.scss';
import PropTypes from 'prop-types';

const INGREDIENT_TYPES = {
  breadTop: () => (
    <div className={classes.BreadTop}>
      <div className={classes.Seeds1}></div>
      <div className={classes.Seeds2}></div>
    </div>
  ),
  breadBottom: () => <div className={classes.BreadBottom}></div>,
  meat: () => <div className={classes.Meat}></div>,
  cheese: () => <div className={classes.Cheese}></div>,
  salad: () => <div className={classes.Salad}></div>,
  bacon: () => <div className={classes.Bacon}></div>,
};

export const Ingredient = ({ type }) => {
  const IngredientType = INGREDIENT_TYPES[type];
  return <IngredientType />;
};

Ingredient.propTypes = {
  type: PropTypes.oneOf(Object.keys(INGREDIENT_TYPES)).isRequired,
};
