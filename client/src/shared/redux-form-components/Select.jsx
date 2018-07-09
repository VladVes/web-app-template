import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormProps } from 'PropTypes';
import Select from 'react-select';

export default class ReduxFormSelect extends Component {
  static propTypes = {
    options: FormProps.SelectOptions.isRequired,
    onChange: PropTypes.func.isRequired,
    value: FormProps.SelectValue.isRequired,
  };

  handleSelect = (value) => {
    this.props.onChange(value);
  };

  render() {
    const {
      options, ...other
    } = this.props;

    return (
      <Select
        {...other}
        options={options}
        onChange={this.handleSelect}
      />
    );
  }
}
