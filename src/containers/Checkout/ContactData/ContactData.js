import React, { useState } from 'react';
import classes from './ContactData.module.css';
import { Button } from '../../../components/UI/Button/Button';
import { OrdersService } from '../../../services/orders';
import { Spinner } from '../../../components/UI/Spinner/Spinner';

export const ContactData = ({ ingredients, price, history }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    },
  });

  const orderHandler = async event => {
    event.preventDefault();

    const body = {
      ingredients,
      price,
      devliveryMethod: 'fast',
      customer: {
        name: 'Mr Costumer',
        email: 'costumer@email.com',
        address: {
          street: 'Street n1',
          zipCode: '41314',
          country: 'Ireland',
        },
      },
    };
    try {
      setLoading(true);
      await OrdersService.post(body);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
      history.push('/');
    }
  };

  let form = (
    <form>
      <input
        className={classes.Input}
        type="text"
        name="name"
        placeholder="John Doe"
      />
      <input
        className={classes.Input}
        type="text"
        name="email"
        placeholder="john.doe@email.com"
      />
      <input
        className={classes.Input}
        type="text"
        name="street"
        placeholder="Street"
      />
      <input
        className={classes.Input}
        type="text"
        name="postal"
        placeholder="Postal Code"
      />
      <Button success clicked={orderHandler}>
        ORDER
      </Button>
    </form>
  );

  if (loading) form = <Spinner />;

  return (
    <div className={classes.ContactData}>
      <h4>Contact data</h4>
      {form}
    </div>
  );
};
