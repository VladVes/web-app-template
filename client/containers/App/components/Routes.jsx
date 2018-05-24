import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ExampleComponent from '../../../containers/ExampleContrainer';
import PrivateRoute from './PrivateRoute';

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path='/' component={ExampleComponent} />
        <PrivateRoute path='/private' component={ExampleComponent} />
      </Switch>
    </div>
  );
};

export default Routes;
