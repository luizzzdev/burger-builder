import React from 'react';
import { Burger } from '../../Burger/Burger';
import { Button } from '../../UI/Button/Button';
import styles from './CheckoutSummary.module.scss';

export const CheckoutSummary = ({
  ingredients,
  onCheckoutCanceled,
  onCheckoutContinued,
}) => {
  const burgerStyle = {
    width: '100%',
    margin: 'auto',
  };

  return (
    <div className={styles.CheckoutSummary}>
      <h1>Yammmmm, tastes good!</h1>
      <div style={burgerStyle}>
        <Burger ingredients={ingredients} />
      </div>
      <Button danger clicked={onCheckoutCanceled}>
        CANCEL
      </Button>
      <Button success clicked={onCheckoutContinued}>
        CONTINUE
      </Button>
    </div>
  );
};
