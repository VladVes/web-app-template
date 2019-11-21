import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import ExampleModule from '../../ExampleModule';
import SignUp from '../../SignUp';
import SignIn from '../../SignIn';
import PrivateRoute from '../containers/PrivateRouteContainer';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ExampleModule} />
    <Route path="/1" component={ExampleModule} />
    <PrivateRoute path="/private" component={ExampleModule} />
    <Route path="/signup" component={SignUp} />
    <Route path="/signin" component={SignIn} />
  </Switch>
);

export default hot(module)(Routes);
