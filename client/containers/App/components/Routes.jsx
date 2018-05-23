import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ExampleComponent from '../../../containers/ExampleContrainer';
// import PrivateRoute from './PrivateRoute';

const mock = () => (<div>mocked</div>);

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path='/' component={ExampleComponent} />
        <Route path='/mock' component={mock} />
      </Switch>
    </div>
  );
};

export default Routes;
