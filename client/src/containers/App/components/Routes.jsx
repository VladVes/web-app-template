import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import ExampleContainer from 'Containers/ExampleContrainer/index';
import SignUpContainer from 'Containers/SignUpContainer/index';
import SignInContainer from 'Containers/SignInContainer/index';
import PrivateRoute from './PrivateRoute';

const Routes = ({ currentUser, isFetching }) => (
  <Switch>
    <Route exact path="/" component={ExampleContainer} />
    <Route exact path="/1" component={ExampleContainer} />
    <PrivateRoute
      exact
      path="/private"
      component={ExampleContainer}
      currentUSer={currentUser}
      isFetching={isFetching}
    />
    <Route exact path="/signup" component={SignUpContainer} />
    <Route exact path="/signin" component={SignInContainer} />
  </Switch>
);
Routes.propTypes = {
  currentUser: PropTypes.shape({}).isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default Routes;
