import React from 'react';
import Layout from './hoc/Layout/Layout';
import { BurgerBuilder } from './containers/BurgerBuilder/BurgerBuilder';
import { Checkout } from './containers/Checkout/Checkout';
import { Route, Switch } from 'react-router-dom';
import { Orders } from './containers/Orders/Orders';
import { Auth } from './containers/Auth/Auth';
import CombinedProviders from './CombinedProviders';

function App() {
  return (
    <CombinedProviders>
      <Layout>
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Route path="/auth" component={Auth} />
          <Route path="/" component={BurgerBuilder} />
        </Switch>
      </Layout>
    </CombinedProviders>
  );
}

export default App;
