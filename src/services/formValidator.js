import { FORM_FIELD_TYPES } from '../constants/form';

export const FormValidatorService = {
  validate(values) {
    const fields = Object.keys(values);

    return fields.reduce((errors, fieldName) => {
      const field = values[fieldName];
      const isEmail = field.type === FORM_FIELD_TYPES.EMAIL;

      if (isEmail && !this._validateEmail(field.value)) {
        errors[fieldName] = 'Invalid email address';
      }

      if (field.required && !field.value) {
        errors[fieldName] = 'Required';
      }

      return errors;
    }, {});
  },
  /**
   *
   * @param email
   * @private
   */
  _validateEmail(email) {
    return (
      typeof email === 'string' &&
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
    );
  },
};
