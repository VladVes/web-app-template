import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
// import PrivateRoute from './PrivateRoute';

const mock = () => (<div>MOCKED</div>);

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path='/' component={mock} />
        <Route path='/mock' component={mock} />
      </Switch>
    </div>
  );
};

export default Routes;
