import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import moment from 'moment';
import ComponentsForm from './components/ComponentsForm';

const selectOptions = [
  { value: 'AK', label: 'Alaska' },
  { value: 'AS', label: 'American Samoa' },
  { value: 'AZ', label: 'Arizona' },
  { value: 'AR', label: 'Arkansas' },
  { value: 'CA', label: 'California' },
  { value: 'CO', label: 'Colorado' },
  { value: 'CT', label: 'Connecticut' },
  { value: 'DE', label: 'Delaware' },
  { value: 'DC', label: 'District Of Columbia' },
];

const ReduxFormsComponents = ({ handleSubmit, onSubmit }) => (
  <ComponentsForm
    handleSubmit={handleSubmit}
    onSubmit={onSubmit}
    selectOptions={selectOptions}
  />
);

ReduxFormsComponents.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'componentsForm',
  initialValues: {
    DatePicker: moment(),
    FilePicker: {}, // we put object here to override default empty string passage
    Select: { value: 'DE', label: 'Delaware' },
    MyFileListPreview: ['/uploads/logo_small.png', '/uploads/logo_white.png'],
  },
})(ReduxFormsComponents);
