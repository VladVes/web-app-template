import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { hot } from 'react-hot-loader';
import MainModal from 'Shared/modal/MainModal';
import configureStore from '../Redux/configureStore';
import Routes from './Routes';
import Main from './Main';

import '../styled/GlobalStyles';

const history = createBrowserHistory();
const store = configureStore(history);

const App = ({ children }) => (
  <div className="App">
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Main>
          <Routes />
          <MainModal />
          {children}
        </Main>
      </ConnectedRouter>
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
