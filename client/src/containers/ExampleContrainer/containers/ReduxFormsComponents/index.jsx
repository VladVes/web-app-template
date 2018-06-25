import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import moment from 'moment';
import ComponentsForm from './components/ComponentsForm';

const PersonData = ({ handleSubmit, onSubmit }) => (
  <ComponentsForm
    handleSubmit={handleSubmit}
    onSubmit={onSubmit}
  />
);

PersonData.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'componentsForm',
  initialValues: {
    DatePicker: moment(),
    FilePicker: {},
    Select: { value: 'DE', label: 'Delaware' },
  },
})(ComponentsForm);
