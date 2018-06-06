import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import LinksForm from './LinksForm';

const validate = values => {
  const errors = {};

  if (!values.link1) {
    errors.link1 = 'Required field';
  }

  if (!values.link2) {
    errors.link2 = 'Required field';
  }

  return errors;
};

class Links extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    initialValues: PropTypes.shape({
      link1: PropTypes.string.isRequired,
      link2: PropTypes.string.isRequired
    }).isRequired
  };

  render() {
    const { handleSubmit, onSubmit, reset } = this.props;

    return (
      <LinksForm
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        reset={reset}
      />
    );
  }
}

export default reduxForm({
  form: 'linksForm',
  validate,
  touchOnChange: true
})(Links);
