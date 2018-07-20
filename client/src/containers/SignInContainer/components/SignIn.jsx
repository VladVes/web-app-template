import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { validateEmail, validatePassword } from 'Utils/FormValidate';
import SignInForm from './SignInForm';

const validate = (values) => {
  const errors = {};

  errors.email = validateEmail(values.email);
  errors.password = validatePassword(values.password);

  return errors;
};

const SignIn = ({ handleSubmit, onSubmit }) => (
  <SignInForm
    handleSubmit={handleSubmit}
    onSubmit={onSubmit}
  />
);

SignIn.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'signInForm',
  validate,
})(SignIn);
