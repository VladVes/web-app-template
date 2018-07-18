import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment/moment';
import ReduxFormsComponents from './ReduxFormsComponents';

const ReduxForm = ({ initialValues, onSubmit }) =>
  <ReduxFormsComponents initialValues={initialValues} onSubmit={onSubmit} />;

ReduxForm.propTypes = {
  initialValues: PropTypes.shape().isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const initialValues = {
  DatePicker: moment(),
  Select: { value: 'DE', label: 'Delaware' },
  MyFileListPreview: [],
};

const connectedForm = connect(
  (state, ownProps) => ({
    ...ownProps,
    initialValues: {
      ...initialValues,
      ...(state.form.componentsForm || {}).values,
      MyFileListPreview: state.example.files.list,
    },
  }),
  {},
)(ReduxForm);


export default connectedForm;
