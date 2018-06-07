import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import PersonDataForm from './components/PersonDataForm';

class PersonData extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

  render() {
    const { handleSubmit, onSubmit } = this.props;

    return (
      <PersonDataForm
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
      />
    );
  }
}

export default reduxForm({
  form: 'personDataForm',
})(PersonData);
