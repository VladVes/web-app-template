import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import ExampleContainer from '../../../containers/ExampleContrainer';
import SignUpContainer from '../../../containers/SignUpContainer';
import SignInContainer from '../../../containers/SignInContainer';
import PrivateRoute from './PrivateRoute';

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={ExampleContainer} />
        <Route path='/1' component={ExampleContainer} />
        <PrivateRoute path='/private' component={ExampleContainer} />
        <Route path='/signup' component={SignUpContainer} />
        <Route path='/signin' component={SignInContainer} />
      </Switch>
    </div>
  );
};

export default hot(module)(Routes);
