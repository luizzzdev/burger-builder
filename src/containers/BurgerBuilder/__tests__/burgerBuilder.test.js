import { BurgerBuilder } from '../BurgerBuilder';
import React from 'react';
import { render } from '@testing-library/react';
import { BurgerProvider } from '../../../context/burgerContext';

describe('Burger Builder', () => {
  it('should add ingredients', async () => {
    const container = render(
      <BurgerProvider>
        <BurgerBuilder />
      </BurgerProvider>
    );

    container.getByTestId('more-cheese').click();
    container.getByTestId('more-meat').click();
    container.getByTestId('more-meat').click();
    container.getByTestId('less-salad').click();

    const cheeseCount = (await container.findAllByTestId('cheese')).length;
    const meatCount = (await container.findAllByTestId('meat')).length;
    const saladCount = ((await container.queryAllByTestId('salad')) || [])
      .length;

    const price = (await container.findByTestId('price')).innerHTML;

    expect(cheeseCount).toBe(1);
    expect(meatCount).toBe(2);
    expect(saladCount).toBe(0);
    expect(price).toBe('9.00');
  });
});
