import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
        <div>
          <Link to="/signup">Sign Up</Link>
          <Link to="/signin" className="ml-3">Sign In</Link>
        </div>
      </div>
    );
  }
}
