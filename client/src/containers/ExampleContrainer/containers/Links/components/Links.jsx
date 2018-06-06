import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import LinksForm from './LinksForm';

class Links extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    initialValues: PropTypes.shape({
      link1: PropTypes.string.isRequired,
      link2: PropTypes.string.isRequired
    }).isRequired
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
  form: 'linksForm'
})(Links);
