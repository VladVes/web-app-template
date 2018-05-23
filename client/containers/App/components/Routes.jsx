import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
// import PrivateRoute from './PrivateRoute';

const mock = () => (<div/>);

const Routes = () => {
  return (
    <main>
      <Switch>
        <Redirect exact from='/' to={mock} />
      </Switch>
    </main>
  );
};

export default Routes;
