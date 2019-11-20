import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import store from '../../../store';
import Routes from './Routes';
import MainWrapper from './MainWrapper';

import MainModal from '../../../common/containers/MainModalContainer';

import '../../../styles/styledComponents/GlobalStyles';

const App = ({ children }) => (
  <div className="App">
    <Provider store={store}>
      <BrowserRouter>
        <MainWrapper>
          <Routes />
          <MainModal />
          {children}
        </MainWrapper>
      </BrowserRouter>
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
