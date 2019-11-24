import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { cache } from 'emotion';
import { CacheProvider } from '@emotion/core';
import { hot } from 'react-hot-loader/root';
import Alert from 'react-s-alert';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import MainModal from '../../common/containers/MainModal';
import history from '../../utils/browserHistory';
import configureStore from '../../store/configureStore';
import Main from './containers/Main';
import CustomAlertTemplate from './components/CustomAlertTemplate';
import { config as i18nextConfig } from '../../misc/translations/index';

import './components/styled/GlobalStyles';

i18next.init(i18nextConfig);

const store = configureStore(history);

// hot should not wrap Providers
const Content = hot(() => (
  <>
    <Main />
    <MainModal />
    <Alert
      effect="stackslide"
      stack={{ limit: 10 }}
      offset={88}
      timeout={15 * 1000}
      contentTemplate={CustomAlertTemplate}
    />
  </>
));

const App = () => (
  <div className="App">
    <CacheProvider value={cache}>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <I18nextProvider i18n={i18next}>
            <Content />
          </I18nextProvider>
        </ConnectedRouter>
      </Provider>
    </CacheProvider>
  </div>
);

export default App;
