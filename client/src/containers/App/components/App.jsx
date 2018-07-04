import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { hot } from 'react-hot-loader';
import MainModal from 'Shared/modal/MainModal';
import configureStore from '../Redux/configureStore';
import Routes from './Routes';
import Main from './Main';

import '../styled/GlobalStyles';

const history = createHistory();
const store = configureStore(history);

const App = ({ children }) => (
  <div className="App">
    <Provider store={store}>
      <Router history={history}>
        <Main>
          <Routes />
          <MainModal />
          {children}
        </Main>
      </Router>
    </Provider>
  </div>
);

App.propTypes = {
  children: PropTypes.node,
};

App.defaultProps = {
  children: null,
};

export default hot(module)(App);
