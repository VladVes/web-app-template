import React from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Input,
  Button,
} from 'reactstrap';
import Field from '../../../common/componetns/redux-form-components/CustomField';

const SignInForm = ({ handleSubmit, onSubmit }) => (
  <Form onSubmit={handleSubmit(onSubmit)} noValidate>
    <Field
      id="email"
      name="email"
      type="email"
      component={Input}
      placeholder="E-mail"
      label="E-mail"
    />
    <Field
      id="password"
      name="password"
      type="password"
      component={Input}
      placeholder="Password"
      label="Password"
    />
    <Button
      type="submit"
      color="primary"
      className="mr-3"
    >
      Sign in
    </Button>
  </Form>
);

SignInForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SignInForm;
