import { Auth } from '../Auth';
import { renderWithRouter } from '../../Checkout/__tests__/checkout.test';
import { AuthService } from '../../../services/auth';
import { fireEvent, wait } from '@testing-library/react';

jest.mock('../../../services/auth');

describe('Auth', () => {
  it('should sign in successfully', async () => {
    AuthService.signIn.mockImplementationOnce(() => {});

    const container = renderWithRouter(Auth);

    expect(container.getByRole('title').innerHTML).toBe('Sign In');
    const emailInput = container.getByPlaceholderText(/email/i);
    fireEvent.input(emailInput, { target: { value: 'luiz@email.com' } });

    const passwordInput = container.getByPlaceholderText(/password/i);
    fireEvent.input(passwordInput, { target: { value: '123456' } });

    container.getByText(/submit/i).click();

    await wait(() => [
      expect(AuthService.signIn).toHaveBeenCalledTimes(1),
      expect(AuthService.signIn).toHaveBeenCalledWith({
        email: 'luiz@email.com',
        password: '123456',
      }),
    ]);
  });

  it('should sign up successfully', async () => {
    AuthService.signUp.mockImplementationOnce(() => {});

    const container = renderWithRouter(Auth);
    container.getByText(/sign up/i).click();
    expect(container.getByRole('title').innerHTML).toBe('Sign Up');

    const emailInput = container.getByPlaceholderText(/email/i);
    fireEvent.input(emailInput, { target: { value: 'luiz@email.com' } });

    const passwordInput = container.getByPlaceholderText(/password/i);
    fireEvent.input(passwordInput, { target: { value: '123456' } });

    container.getByText(/submit/i).click();

    await wait(() => [
      expect(AuthService.signUp).toHaveBeenCalledTimes(1),
      expect(AuthService.signUp).toHaveBeenCalledWith({
        email: 'luiz@email.com',
        password: '123456',
      }),
    ]);
  });
});
