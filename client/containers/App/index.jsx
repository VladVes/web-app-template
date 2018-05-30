import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import App from './components/App';
import AppDev from './components/App.dev';

const isDev = process.env.NODE_ENV === 'dev';

const Main = () => {
  return isDev ? (<App/>) : (<AppDev/>);
};

export default Main;
