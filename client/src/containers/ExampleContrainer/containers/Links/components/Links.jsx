import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import LinksForm from './LinksForm';
import { validateRequired } from '../../../../../utils/FormValidate';

const validate = (values) => {
  const errors = {};

  errors.link1 = validateRequired(values.link1);
  errors.link2 = validateRequired(values.link2);

  return errors;
};

const Links = ({ handleSubmit, onSubmit, reset }) => (
  <LinksForm
    handleSubmit={handleSubmit}
    onSubmit={onSubmit}
    reset={reset}
  />
);

Links.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'linksForm',
  validate,
  touchOnChange: true,
})(Links);
