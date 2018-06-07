import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import SignUpForm from './SignUpForm';

class SignUp extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

  render() {
    const { handleSubmit, onSubmit } = this.props;

    return (
      <SignUpForm
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
      />
    );
  }
}

export default reduxForm({
  form: 'signUpForm',
})(SignUp);
