import React from 'react';
import PropTypes from 'prop-types';
import ReCaptcha from 'react-google-recaptcha';

const SITEKEY = '6LcJAXEUAAAAAOTq-V7tfPyOo0k1FtxDQ0_6_lX6';

const Captcha = ({ onChange }) => (
  <ReCaptcha
    sitekey={SITEKEY}
    onChange={onChange}
  />
);

Captcha.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Captcha;
