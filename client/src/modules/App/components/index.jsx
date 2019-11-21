import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import App from './App';
import AppDev from './App.dev';

const isDev = process.env.NODE_ENV === 'development';

// TODO it's will be nice to use react hook here (for fetching user)
class Main extends React.Component {
  constructor(props) {
    super(props);
    if (!props.isUserDataLoaded) {
      props.fetchCurrentUser();
    }
  }
  render() {
    return isDev ? <AppDev /> : <App />;
  }
}

// const Main = () => (isDev ? (<AppDev />) : (<App />));

export default Main;
