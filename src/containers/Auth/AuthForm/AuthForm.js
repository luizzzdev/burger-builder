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
      {({ isSubmitting, handleSubmit }) => (
        <Fragment>
          <h1 role="title">{title}</h1>
          <Form className={classes.Form} onSubmit={handleSubmit}>
            <Field type="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" placeholder="Password" />
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
