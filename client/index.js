import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Router } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import App from './containers/App';

const history = createHistory();

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Router history={history}>
        <Component />
      </Router>
    </AppContainer>,
    document.getElementById('app')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextRootContainer = require('./containers/App').default;
    render(NextRootContainer);
  });
}