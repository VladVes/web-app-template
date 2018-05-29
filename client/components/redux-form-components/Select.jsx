import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

export default class ReduxformSelect extends Component {
  static propTypes = { // todo: in terms of example - complete shaping
    input: PropTypes.shape({ onChange: PropTypes.func }),
    children: PropTypes.func,
    options: PropTypes.object, // todo: shape from Select options
    className: PropTypes.string
  };

  handleInputChange = ({ value }) => {
    this.props.input.onChange(value);
  };

  render() {
    const { children, input, options, className } = this.props;

    return (
      <label className={className}>
        {children}
        <Select
          clearable={false}
          searchable={false}
          options={options}
          {...input}
          onChange={this.handleInputChange}
        />
      </label>
    );
  }
}
