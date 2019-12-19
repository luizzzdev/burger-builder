import React from 'react';
import { AuthForm } from '../AuthForm';
import { fireEvent, render } from '@testing-library/react';
import { wait } from '@testing-library/dom';

describe('AuthForm', () => {
  it('sends the data right', async () => {
    const submit = jest.fn();

    const container = render(<AuthForm title="Sign in" onSubmit={submit} />);

    const emailInput = container.getByPlaceholderText(/email/i);
    fireEvent.input(emailInput, { target: { value: 'luiz@email.com' } });

    const passwordInput = container.getByPlaceholderText(/password/i);
    fireEvent.input(passwordInput, { target: { value: '123456' } });

    const submitButton = container.getByText(/submit/i);

    await wait(() => {
      fireEvent.click(submitButton);
    });

    await wait(() =>
      expect(submit).toHaveBeenCalledWith({
        email: 'luiz@email.com',
        password: '123456',
      })
    );
  });
});
