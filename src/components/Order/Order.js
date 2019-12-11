import React from 'react';
import { Burger } from '../Burger/Burger';
import classes from './Order.module.css';

export const Order = ({ order }) => {
  return (
    <div>
      <Burger ingredients={order.ingredients} />
      <div className={classes.Ingredients}>
        <h4 className={classes.Price}>
          Price <span>${order.price}</span>
        </h4>
        <p>Salad: {order.ingredients.salad}</p>
        <p>Meat: {order.ingredients.meat}</p>
        <p>Cheese: {order.ingredients.cheese}</p>
        <p>Bacon: {order.ingredients.bacon}</p>
      </div>
    </div>
  );
};
