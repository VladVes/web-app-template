import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import configureStore from '../Redux/configureStore';
import Routes from './Routes';
import Main from './Main';

import '../styled/GlobalStyles';

const store = configureStore();

const App = () => (
  <div className="App">
    <Provider store={store}>
      <BrowserRouter>
        <Main>
          <Routes />
        </Main>
      </BrowserRouter>
    </Provider>
  </div>
);

export default hot(module)(App);
