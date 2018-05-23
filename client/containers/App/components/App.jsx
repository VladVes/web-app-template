import React, { Component } from 'react';
import { Router } from 'react-router';
import { hot } from 'react-hot-loader';
import createHistory from 'history/createBrowserHistory';
import Routes from './Routes';

const history = createHistory();

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router history={history}>
          <Routes />
        </Router>
      </div>
    );
  }
}

export default hot(module)(App);
