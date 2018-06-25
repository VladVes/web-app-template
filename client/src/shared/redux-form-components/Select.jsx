import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

export default class ReduxformSelect extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.string, label: PropTypes.string })).isRequired,
    onChange: PropTypes.func.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    value: PropTypes.object,
  };

  static defaultProps = {
    value: null,
  };

  handleSelect = ({ value }) => {
    this.props.onChange(value);
  };

  render() {
    const {
      value, options, ...other
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
