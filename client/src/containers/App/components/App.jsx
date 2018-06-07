import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { Container } from 'reactstrap';
import configureStore from '../Redux/configureStore';
import Routes from './Routes';

const store = configureStore();

const App = () => (
  <div className="App">
    <Provider store={store}>
      <BrowserRouter>
        <Container className="mt-3">
          <Routes />
        </Container>
      </BrowserRouter>
    </Provider>
  </div>
);

export default hot(module)(App);
