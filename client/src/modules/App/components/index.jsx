import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import App from './App';
import AppDev from './App.dev';

const isDev = process.env.NODE_ENV === 'development';

function Main() {
  return isDev ? <AppDev /> : <App />;
}

export default Main;
