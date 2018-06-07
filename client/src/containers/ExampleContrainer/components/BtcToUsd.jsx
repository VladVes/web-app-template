import React from 'react';
import PropTypes from 'prop-types';

const BtcToUsd = props => (
  <div>
    <span>BTC to USD: {props.price}$</span>
    <button onClick={props.handleRefresh}>
      fetch
    </button>
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
