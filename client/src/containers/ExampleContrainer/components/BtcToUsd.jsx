import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BtcToUsd = props => (
  <div>
    <span>BTC to USD: {props.price}$</span>
    <button onClick={props.handleRefresh}>
          fetch
    </button>
    <div>
      <Link to="/signup">Sign Up</Link>
      <Link to="/signin" className="ml-3">Sign In</Link>
    </div>
  </div>
);

BtcToUsd.propTypes = {
  price: PropTypes.string,
  handleRefresh: PropTypes.func.isRequired,
};
BtcToUsd.defaultProps = {
  price: '0',
};

export default BtcToUsd;
