import React from 'react';
import { Aux } from '../../../hoc/Aux/Aux';
import { Button } from '../../UI/Button/Button';

export const OrderSummary = ({
  ingredients,
  purchaseCanceled,
  purchaseContinued,
  price,
}) => {
  const ingredientSummary = Object.keys(ingredients).map(ingredient => {
    return (
      <li key={ingredient}>
        <span style={{ textTransform: 'capitalize' }}>{ingredient}</span>:
        <span> {ingredients[ingredient]}</span>
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkout?</p>
      <p>
        <strong>Total price: {price}</strong>
      </p>
      <Button danger clicked={purchaseCanceled}>
        CANCEL
      </Button>
      <Button success clicked={purchaseContinued}>
        CONTINUE
      </Button>
    </Aux>
  );
};
