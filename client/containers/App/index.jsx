import React from 'react';
import App from './components/App';
import AppDev from './components/App.dev';

const isDev = process.env.NODE_ENV === 'dev';

export default () => {
  return isDev ? (<App/>) : (<AppDev/>);
};
