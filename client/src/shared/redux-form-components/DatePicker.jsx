/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css'; // todo: replace with styled

const propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.objectOf(moment).isRequired,
};

const ReduxDatePicker = ({ value, onChange, ...other }) => (
  <span>After update - date picker down. Help wanted.</span>
);

ReduxDatePicker.propTypes = propTypes;

export default ReduxDatePicker;
