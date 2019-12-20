import React from 'react';
import { Aux } from '../../hoc/Aux/Aux';
import { Burger } from '../../components/Burger/Burger';
import { BuildControls } from '../../components/Burger/BuildControls/BuildControls';
import { Modal } from '../../components/UI/Modal/Modal';
import { OrderSummary } from '../../components/Burger/OrderSummary/OrderSummary';
import { Spinner } from '../../components/UI/Spinner/Spinner';
import { BurgerContext } from '../../context/burgerContext';

export const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.4,
  cheese: 1,
  meat: 2,
};

export const BurgerBuilder = props => {
  const [state, setState] = React.useState({
    purchasing: false,
    loading: false,
  });

  const {
    ingredients,
    addIngredient,
    removeIngredient,
    price,
    purchasable,
  } = React.useContext(BurgerContext);

  const purchasingHandler = () => {
    setState(prevState => ({ ...prevState, purchasing: true }));
  };

  const purchaseCancelHandler = () => {
    setState(prevState => ({ ...prevState, purchasing: false }));
  };

  const purchaseContinueHandler = async () => {
    props.history.push({
      pathname: '/checkout',
    });
  };

  const disabledInfo = {
    ...ingredients,
  };

  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }

  let orderComponent = (
    <OrderSummary
      purchaseCanceled={purchaseCancelHandler}
      purchaseContinued={purchaseContinueHandler}
      ingredients={ingredients}
      price={price.toFixed(2)}
    />
  );

  if (state.loading) {
    orderComponent = <Spinner />;
  }

  return (
    <Aux>
      <Modal show={state.purchasing} closed={purchaseCancelHandler}>
        {orderComponent}
      </Modal>
      <Burger ingredients={ingredients} />
      <BuildControls
        disabled={disabledInfo}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
        price={price}
        purchasable={purchasable}
        ordered={purchasingHandler}
      />
    </Aux>
  );
};
