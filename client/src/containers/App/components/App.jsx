import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { hot } from 'react-hot-loader';
import Alert from 'react-s-alert';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import MainModal from 'Shared/modal/MainModal';
import configureStore from '../Redux/configureStore';
import Routes from './Routes';
import Main from './Main';
import CustomAlertTemplate from './CustomAlertTemplate';
import { config as i18nextConfig } from '../../../translations/index';

import '../styled/GlobalStyles';

i18next.init(i18nextConfig);

const history = createBrowserHistory();
const store = configureStore(history);

const App = ({ children }) => (
  <div className="App">
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <I18nextProvider i18n={i18next}>
          <Main>
            <Routes />
            <MainModal />
            <Alert
              effect="stackslide"
              stack={{ limit: 10 }}
              offset={88}
              timeout={15 * 1000}
              contentTemplate={CustomAlertTemplate}
            />
            {children}
          </Main>
        </I18nextProvider>
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
