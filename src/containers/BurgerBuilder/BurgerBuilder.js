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
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    loading: false,
  });

  const ingredientsContext = React.useContext(BurgerContext);

  const updatedPurchaseState = ingredients => {
    const hasSomeIngredients = Object.values(ingredients).some(
      ingredientAmount => ingredientAmount > 0
    );
    setState(prevState => ({ ...prevState, purchasable: hasSomeIngredients }));
  };

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

  const addIngredientHandler = type => {
    const updatedCount = state.ingredients[type] + 1;
    const updatedIngredients = {
      ...state.ingredients,
      [type]: updatedCount,
    };

    const updatedTotalPrice = state.totalPrice + INGREDIENT_PRICES[type];

    ingredientsContext.ingredients = updatedIngredients;
    ingredientsContext.price = updatedTotalPrice;

    setState(prevState => ({
      ...prevState,
      ingredients: updatedIngredients,
      totalPrice: updatedTotalPrice,
    }));
    updatedPurchaseState(updatedIngredients);
  };

  const removeIngredientHandler = type => {
    const updatedCount = state.ingredients[type] - 1;
    if (updatedCount < 0) return;
    const updatedIngredients = {
      ...state.ingredients,
      [type]: updatedCount,
    };

    const updatedTotalPrice = state.totalPrice - INGREDIENT_PRICES[type];

    ingredientsContext.ingredients = updatedIngredients;
    ingredientsContext.price = updatedTotalPrice;

    setState(prevState => ({
      ...prevState,
      ingredients: updatedIngredients,
      totalPrice: updatedTotalPrice,
    }));
    updatedPurchaseState(updatedIngredients);
  };

  const disabledInfo = {
    ...state.ingredients,
  };

  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }

  let orderComponent = (
    <OrderSummary
      purchaseCanceled={purchaseCancelHandler}
      purchaseContinued={purchaseContinueHandler}
      ingredients={state.ingredients}
      price={state.totalPrice.toFixed(2)}
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
      <Burger ingredients={state.ingredients} />
      <BuildControls
        disabled={disabledInfo}
        addIngredient={addIngredientHandler}
        removeIngredient={removeIngredientHandler}
        price={state.totalPrice}
        purchasable={state.purchasable}
        ordered={purchasingHandler}
      />
    </Aux>
  );
};
