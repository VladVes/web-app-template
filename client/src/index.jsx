import React from 'react';
import ReactDOM from 'react-dom';
import App from './modules/App';

const render = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('app'),
  );
};

render();
