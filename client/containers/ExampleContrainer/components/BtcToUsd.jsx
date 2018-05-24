import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class BtcToUsd extends Component {
  static propTypes = {
    price: PropTypes.any
  };

  static defaultProps = {
    price: 0
  };

  render() {
    return (
      <span>BTC to USD: {this.props.price}$</span>
    );
  }
}
