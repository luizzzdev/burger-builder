import React from 'react';

export const BurgerContext = React.createContext({
  setIngredients: () => {},
  ingredients: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  },
  price: 0,
});
