import React from 'react';
import { Ingredient } from './Ingredients/Ingredient';
import classes from './Burger.module.scss';
import PropTypes from 'prop-types';

export const Burger = ({ ingredients }) => {
  let transformedIngredients = ((ingredients && Object.keys(ingredients)) || [])
    .map(ingredientKey => {
      return [...Array(ingredients[ingredientKey])].map((_, index) => {
        return <Ingredient key={ingredientKey + index} type={ingredientKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={classes.Burger}>
      <Ingredient type={'breadTop'} />
      {transformedIngredients}
      <Ingredient type={'breadBottom'} />
    </div>
  );
};

Burger.propTypes = {
  ingredients: PropTypes.object,
};
