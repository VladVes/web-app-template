import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import LinksForm from './LinksForm';

class Links extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
  };

  render() {
    const { handleSubmit, onSubmit } = this.props;

    return (
      <LinksForm
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
      />
    );
  }
}

export default reduxForm({
  form: 'links'
})(Links);
