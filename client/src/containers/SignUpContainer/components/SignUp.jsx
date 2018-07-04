import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import SignUpForm from './SignUpForm';
import { validateEmail, validatePassword } from '../../../utils/FormValidate';

const validate = (values) => {
  const errors = {};

  errors.email = validateEmail(values.email);
  errors.password = validatePassword(values.password);

  return errors;
};

const SignUp = ({ handleSubmit, onSubmit }) => (
  <SignUpForm
    handleSubmit={handleSubmit}
    onSubmit={onSubmit}
  />
);

SignUp.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'signUpForm',
  validate,
})(SignUp);
