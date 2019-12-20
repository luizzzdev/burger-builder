import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import React from 'react';
import { Route, Router } from 'react-router-dom';

export const click = wrapper => {
  wrapper.simulate('click');
};

export const renderWithRouter = (
  Component,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {}
) => {
  return render(
    <Router history={history}>
      <Route component={Component} />
    </Router>
  );
};
