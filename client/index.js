import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import App from './containers/App';

const history = createHistory();

const Index = () => {
  return (
    <div>
      <Router history={history}>
        <App/>
      </Router>
    </div>
  );
};

module.hot.accept();
ReactDOM.render(<Index />, document.getElementById('app'));
