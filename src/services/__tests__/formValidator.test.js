import { FormValidatorService } from '../formValidator';
import { FORM_FIELD_TYPES } from '../../constants/form';

describe('Form Validator', () => {
  it('validates a required field', () => {
    const value = {
      password: {
        required: true,
        value: 'pass',
      },
    };

    let validaton = FormValidatorService.validate(value);
    expect(validaton).toMatchObject({});
    value.password.value = '';
    validaton = FormValidatorService.validate(value);
    expect(validaton).toMatchObject({ password: 'Required' });
  });

  it('validates a email field', () => {
    const value = {
      email: {
        required: true,
        type: FORM_FIELD_TYPES.EMAIL,
        value: 'pass',
      },
    };

    let validaton = FormValidatorService.validate(value);
    expect(validaton).toMatchObject({ email: 'Invalid email address' });
    value.email.value = 'email@email.com';
    validaton = FormValidatorService.validate(value);
    expect(validaton).toMatchObject({});
  });
});
