import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment/moment';
import { FormProps } from 'Shared/prop-types';
import ReduxFormsComponents from './ReduxFormsComponents';

const ReduxForm = ({ initialValues, onSubmit }) => (
  <ReduxFormsComponents
    initialValues={initialValues}
    onSubmit={onSubmit}
  />
);

ReduxForm.propTypes = {
  initialValues: PropTypes.shape({
    MyFileList: PropTypes.arrayOf(FormProps.ServerFile),
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const initialValues = {
  DatePicker: moment(),
  Select: { value: 'DE', label: 'Delaware' },
  MyFileList: [],
};

// todo: clean this useless mess
const connectedForm = connect(
  (state, ownProps) => ({
    ...ownProps,
    initialValues: {
      ...initialValues,
      ...(state.form.componentsForm || {}).values,
      MyFileList: state.example.files.list,
    },
  }),
  {},
)(ReduxForm);


export default connectedForm;
