import React from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Input,
  Button,
} from 'reactstrap';
import Field from '../../../shared/redux-form-components/CustomField';
import Captcha from '../../../shared/redux-form-components/Captcha';

const SignUpForm = ({ handleSubmit, onSubmit }) => (
  <Form onSubmit={handleSubmit(onSubmit)}>
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
    <Field
      component={Captcha}
      id="captcha"
      name="captcha"
      label="Captcha"
    />
    <Button
      type="submit"
      color="primary"
      className="mr-3"
    >
      Sign up
    </Button>
  </Form>
);

SignUpForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SignUpForm;
