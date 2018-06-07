import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class BtcToUsd extends Component {
  static propTypes = {
    price: PropTypes.string,
    handleRefresh: PropTypes.func.isRequired,
  };

  static defaultProps = {
    price: '0',
  };

  render() {
    return (
      <div>
        <span>BTC to USD: {this.props.price}$</span>
        <button onClick={this.props.handleRefresh}>
          fetch
        </button>
      </div>
    );
  }
}
