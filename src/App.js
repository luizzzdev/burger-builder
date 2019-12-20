import React from 'react';
import Layout from './hoc/Layout/Layout';
import { BurgerBuilder } from './containers/BurgerBuilder/BurgerBuilder';
import { Checkout } from './containers/Checkout/Checkout';
import { Route, Switch } from 'react-router-dom';
import { Orders } from './containers/Orders/Orders';
import { Auth } from './containers/Auth/Auth';
import { BurgerProvider } from './context/burgerContext';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Route path="/auth" component={Auth} />

          <BurgerProvider>
            <Route path="/" component={BurgerBuilder} />
          </BurgerProvider>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
