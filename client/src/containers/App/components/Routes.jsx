import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import ExampleContainer from '../../ExampleContrainer/index';
import SignUpContainer from '../../SignUpContainer/index';
import SignInContainer from '../../SignInContainer/index';
import PrivateRoute from './PrivateRoute';

const Routes = () => (
  <div>
    <Switch>
      <Route exact path="/" component={ExampleContainer} />
      <Route path="/1" component={ExampleContainer} />
      <PrivateRoute path="/private" component={ExampleContainer} isLogged={false} />
      <Route path="/signup" component={SignUpContainer} />
      <Route path="/signin" component={SignInContainer} />
    </Switch>
  </div>
);

export default hot(module)(Routes);
