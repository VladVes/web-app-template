import React from 'react';
import PropTypes from 'prop-types';

const SignUpSuccess = ({ checkEmail }) => (
  checkEmail ? <div>registartion complete, check email...</div> : <div>dont check email, we trust you</div>
);

SignUpSuccess.propTypes = {
  checkEmail: PropTypes.bool,
};

SignUpSuccess.defaultProps = {
  checkEmail: false,
};

export default SignUpSuccess;
