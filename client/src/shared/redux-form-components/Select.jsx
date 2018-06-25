import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const SelectProp = PropTypes.shape({ value: PropTypes.string, label: PropTypes.string });

export default class ReduxFormSelect extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(SelectProp).isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.shape({ value: PropTypes.string, label: PropTypes.string }).isRequired,
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
