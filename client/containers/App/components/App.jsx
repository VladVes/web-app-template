import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import { hot } from 'react-hot-loader';
import createHistory from 'history/createBrowserHistory';
import { Container } from 'reactstrap';
import configureStore from '../Redux/configureStore';
import Routes from './Routes';

const history = createHistory();
const store = configureStore([ routerMiddleware(history) ]);

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Provider store={store}>
          <Router history={history}>
            <Container className='mt-3'>
              <Routes />
            </Container>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default hot(module)(App);
