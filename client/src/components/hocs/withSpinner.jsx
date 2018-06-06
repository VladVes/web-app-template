import React from 'react';
import PropTypes from 'prop-types';

const withSpinner = Component => {
  const Wrapped = ({ isFetching, ...props }) => (
    isFetching ? <div>Loading...</div> : <Component {...props}/>
  );

  Wrapped.propTypes = {
    isFetching: PropTypes.bool.isRequired
  };

  return Wrapped;
};

export default withSpinner;
