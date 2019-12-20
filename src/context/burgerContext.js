import React, { useState } from 'react';
import { INGREDIENT_PRICES } from '../containers/BurgerBuilder/BurgerBuilder';

export const BurgerContext = React.createContext({
  addIngredient: () => {},
  removeIngredient: () => {},
  ingredients: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  },
  price: 0,
});

export const BurgerProvider = props => {
  const [ingredients, setIngredients] = useState({
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  });

  const [price, setPrice] = useState(4);

  const isPurchasable = () => {
    return Object.values(ingredients).some(
      ingredientAmount => ingredientAmount > 0
    );
  };

  const addIngredient = type => {
    const updatedCount = ingredients[type] + 1;
    const updatedIngredients = {
      ...ingredients,
      [type]: updatedCount,
    };

    const updatedTotalPrice = price + INGREDIENT_PRICES[type];
    setIngredients(updatedIngredients);
    setPrice(updatedTotalPrice);
  };

  const removeIngredient = type => {
    const updatedCount = ingredients[type] - 1;
    if (updatedCount < 0) return;

    const updatedIngredients = {
      ...ingredients,
      [type]: updatedCount,
    };

    const updatedTotalPrice = price - INGREDIENT_PRICES[type];

    setIngredients(updatedIngredients);
    setPrice(updatedTotalPrice);
  };

  return (
    <BurgerContext.Provider
      value={{
        addIngredient,
        removeIngredient,
        ingredients,
        price,
        purchasable: isPurchasable(),
      }}
    >
      {props.children}
    </BurgerContext.Provider>
  );
};
