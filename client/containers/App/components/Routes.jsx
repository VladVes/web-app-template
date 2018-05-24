import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import ExampleComponent from '../../../containers/ExampleContrainer';
import PrivateRoute from './PrivateRoute';

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={ExampleComponent} />
        <Route path='/1' component={ExampleComponent} />
        <PrivateRoute path='/private' component={ExampleComponent} />
      </Switch>
    </div>
  );
};

export default hot(module)(Routes);
