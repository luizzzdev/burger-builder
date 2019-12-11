import React, { useState } from 'react';
import classes from './ContactData.module.scss';
import { Button } from '../../../components/UI/Button/Button';
import { OrdersService } from '../../../services/orders';
import { Spinner } from '../../../components/UI/Spinner/Spinner';
import { Input } from '../../../components/UI/Input/Input';

export const ContactData = ({ ingredients, price, history }) => {
  const [loading, setLoading] = useState(false);

  const [orderForm, setOrderForm] = useState({
    name: {
      elementType: 'input',
      value: '',
      placeholder: 'Name',
    },
    email: {
      elementType: 'input',
      value: '',
      placeholder: 'Email',
    },
    street: {
      elementType: 'input',
      value: '',
      placeholder: 'Street',
    },
    zipCode: {
      elementType: 'input',
      value: '',
      placeholder: 'Zip Code',
    },
    country: {
      elementType: 'input',
      value: '',
      placeholder: 'Country',
    },
  });

  const orderHandler = async event => {
    event.preventDefault();

    const body = {
      ingredients,
      price,
      devliveryMethod: 'fast',
      customer: {
        name: orderForm.name,
        email: orderForm.email,
        address: {
          street: orderForm.street,
          zipCode: orderForm.zipCode,
          country: orderForm.country,
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
      {Object.keys(orderForm).map(formField => {
        const onInputHandler = event => {
          const value = event.target.value;
          setOrderForm(prevState => ({
            ...prevState,
            [formField]: value,
          }));
        };

        const inputtype = orderForm[formField].elementType;
        const placeholder = orderForm[formField].placeholder;

        return (
          <Input
            inputtype={inputtype}
            placeholder={placeholder}
            onInput={onInputHandler}
          />
        );
      })}

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
