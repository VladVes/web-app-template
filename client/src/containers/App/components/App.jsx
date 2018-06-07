import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { routerMiddleware } from 'react-router-redux';
import { hot } from 'react-hot-loader';
import { Container } from 'reactstrap';
import configureStore from '../Redux/configureStore';
import Routes from './Routes';

const store = configureStore([ routerMiddleware(history) ]);

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Provider store={store}>
          <BrowserRouter>
            <Container className='mt-3'>
              <Routes />
            </Container>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default hot(module)(App);
