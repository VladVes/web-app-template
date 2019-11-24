import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import SignUp from '../../SignUp';
import SignIn from '../../SignIn';
import Example from '../../Example';

const Routes = ({ currentUser, isFetching }) => (
  <Switch>
    <Route exact path="/" component={Example} />
    <Route exact path="/1" component={Example} />
    <PrivateRoute
      exact
      path="/private"
      component={Example}
      currentUSer={currentUser}
      isFetching={isFetching}
    />
    <Route exact path="/signup" component={SignUp} />
    <Route exact path="/signin" component={SignIn} />
  </Switch>
);
Routes.propTypes = {
  currentUser: PropTypes.shape({}).isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default Routes;
