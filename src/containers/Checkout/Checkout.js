import React, { useState, useEffect } from 'react';
import { CheckoutSummary } from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { parseURLParams } from '../../helpers';
import { Route } from 'react-router-dom';
import { ContactData } from './ContactData/ContactData';

const defaultBurger = {
  salad: 0,
  bacon: 0,
  cheese: 0,
  meat: 0,
};

export const Checkout = props => {
  const [ingredients, setIngredients] = useState(defaultBurger);
  const [price, setPrice] = useState(0);

  useEffect((props) => {
    const params = parseURLParams(props.location.search);

    setIngredients({
      salad: params['salad'],
      meat: params['meat'],
      cheese: params['cheese'],
      bacon: params['bacon'],
    });

    setPrice(params['price']);
  }, []);

  const checkoutCanceledHandler = () => {
    props.history.goBack();
  };

  const checkoutContinuedHandler = () => {
    props.history.replace('/checkout/contact-data');
  };

  const contactDataRoute = props.match.path + '/contact-data';

  return (
    <div>
      <CheckoutSummary
        ingredients={ingredients}
        onCheckoutCanceled={checkoutCanceledHandler}
        onCheckoutContinued={checkoutContinuedHandler}
      />

      <Route
        path={contactDataRoute}
        render={props => (
          <ContactData
            ingredients={ingredients}
            price={price}
            history={props.history}
          />
        )}
      />
    </div>
  );
};
