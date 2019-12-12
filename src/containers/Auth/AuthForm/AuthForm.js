import React, { Fragment } from 'react';
import { FormValidatorService } from '../../../services/formValidator';
import { FORM_FIELD_TYPES } from '../../../constants/form';
import classes from '../Auth.module.scss';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Button } from '../../../components/UI/Button/Button';

export const AuthForm = ({ onSubmit, title }) => {
  const initialValues = {
    email: '',
    password: '',
  };

  const formSubmitHandler = event => event.preventDefault();

  return (
    <Formik
      initialValues={initialValues}
      validate={values => {
        return FormValidatorService.validate({
          email: {
            required: true,
            value: values.email,
            type: FORM_FIELD_TYPES.EMAIL,
          },
          password: {
            required: true,
            value: values.password,
          },
        });
      }}
      onSubmit={values => onSubmit(values)}
    >
      {({ isSubmitting }) => (
        <Fragment>
          <h1>{title}</h1>
          <Form className={classes.Form} onSubmit={formSubmitHandler}>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <Button type="submit" disabled={isSubmitting} success>
              Submit
            </Button>
          </Form>
        </Fragment>
      )}
    </Formik>
  );
};
