import React from 'react';
import { CheckoutSummary } from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import { ContactData } from './ContactData/ContactData';
import { BurgerContext } from '../../context/burgerContext';

export const Checkout = props => {
  const { ingredients, price } = React.useContext(BurgerContext);

  const checkoutCanceledHandler = () => {
    props.history.goBack();
  };

  const checkoutContinuedHandler = () => {
    props.history.replace(contactDataRoute);
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
