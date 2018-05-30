import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import SignInForm from './SignInForm';

class SignIn extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
  };

  render() {
    const { handleSubmit, onSubmit } = this.props;

    return (
      <SignInForm
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
      />
    );
  }
}

export default reduxForm({
  form: 'signIn'
})(SignIn);
