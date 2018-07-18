import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
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

const initialValues = {
  DatePicker: moment(),
  Select: { value: 'DE', label: 'Delaware' },
  MyFileListPreview: [],
};

const form = reduxForm({
  form: 'componentsForm',
  initialValues,
  enableReinitialize: true,
  keepDirtyOnReinitialize: false,
})(ReduxFormsComponents);

const connectedForm = connect(
  (state, ownProps) => ({
    ...ownProps,
    initialValues: {
      ...initialValues,
      ...ownProps.initialValues,
      MyFileListPreview: state.example.files.list,
    },
  }),
  {},
)(form);


export default connectedForm;
