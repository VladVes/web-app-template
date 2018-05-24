import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { hot } from 'react-hot-loader';
import createHistory from 'history/createBrowserHistory';
import configureStore from '../Redux/configureStore';
import Routes from './Routes';

const history = createHistory();
const store = configureStore();

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Provider store={store}>
          <Router history={history}>
            <Routes />
          </Router>
        </Provider>
      </div>
    );
  }
}

export default hot(module)(App);
