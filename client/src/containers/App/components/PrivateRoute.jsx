import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ path, component, isLogged }) => (
  isLogged ?
    <Route path={path} component={component} /> :
    <Redirect from={path} to="/" />);

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default PrivateRoute;
